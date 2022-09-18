/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import TimeSlider from '@arcgis/core/widgets/TimeSlider'
import FeatureFilter from '@arcgis/core/views/layers/support/FeatureFilter'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import { mobileHistoryFields, mobileTemplateContent, mobileRendererContent } from './HistoryController/featureField'
// import { mobileTemplateContent } from './RealTimeController/templateContent'
// import { mobileRendererContent } from './RealTimeController/rendererContent'
import { changeSymbolDefinition } from './RealTimeController/featureField'
import api from '../../api'

const typeSet = {
  mot: {
    title: "移動式感測器",
    template: new PopupTemplate(mobileTemplateContent),
    renderer: new ClassBreaksRenderer(mobileRendererContent),
    markStyle: 'circle'
  }
}

export interface HistoryQueryParams {
  startDateTime: number
  endDateTime: number
  DeviceList: string | null,
  _extent: number[]
}

export interface IHistoryControllerParam {
  mapSet: IBaseControllerParam
  timeSlider: TimeSlider
}

export default class HistoryController extends BaseController {
  mobileLayer: GeoJSONLayer | undefined
  timeSlider: TimeSlider | undefined
  workingStatus: boolean

  constructor(options: IHistoryControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
    this.timeSlider = options.timeSlider
    this.workingStatus = false
  }

  public start = () => {
    if (this.workingStatus === false) {
      this.loadLayer()
    }
    this.workingStatus = true
  }

  public stop = () => {
    if (this.workingStatus === true) {
      if (this.mobileLayer) {
        this._clearMap([this.mobileLayer])
      }
    }
    this.workingStatus = false
  }

  public loadLayer = () => {
    this.mobileLayer = new GeoJSONLayer({
      title: "移動歷史觀測",
      fields: mobileHistoryFields,
      timeInfo: {
        startField: 'Datetime'
      },
      popupTemplate: new PopupTemplate(mobileTemplateContent),
      renderer: new ClassBreaksRenderer(mobileRendererContent)
    })
    this.map.add(this.mobileLayer)
  }

  public query = async (params: HistoryQueryParams) => {
    if (this.mobileLayer) {
      // this._clearMap([this.mobileLayer])
      this.map.removeAll()
    }
    const value = await this.fetchLayerData(params)
    if (value) {
      this.mobileLayer = new GeoJSONLayer({
        title: "移動歷史觀測",
        url: value,
        fields: mobileHistoryFields,
        timeInfo: {
          startField: 'Datetime'
        },
        popupTemplate: new PopupTemplate(mobileTemplateContent),
        renderer: new ClassBreaksRenderer(mobileRendererContent)
      })
      this.map.add(this.mobileLayer)

      this.mobileLayer.when(() => {
        this.mapView.goTo(this.mobileLayer?.fullExtent)
        this.updateTimeSlider()
      })

    } else {
      alert('該時段查無資料')
      return false
    }
  }

  public updateTimeSlider = () => {
    this.mapView?.whenLayerView(this.mobileLayer as GeoJSONLayer).then((lv) => {
      if (this.timeSlider && this.mobileLayer) {
        this.timeSlider.fullTimeExtent = this.mobileLayer.timeInfo.fullTimeExtent.expandTo('minutes')
        this.timeSlider.watch('timeExtent', () => {
          lv.filter = new FeatureFilter({
            timeExtent: this.timeSlider?.timeExtent
          })
        })
      }
    })
  }

  public fetchLayerData = async (params: HistoryQueryParams) => {
    let response: Response
    if (params.DeviceList !== null) {
      response = await api.history.QueryMobileHistory2({
        startDateTime: params.startDateTime,
        endDateTime: params.endDateTime
      }, params.DeviceList)
    }
    else {
      // const _extent = projectExtent(this.mapView)
      response = await api.history.QueryMobileHistory({
        startDateTime: params.startDateTime,
        endDateTime: params.endDateTime
      }, params._extent)
    }
    if (response.status === 200) {
      return api.history.historyJsonPath
    }
    return undefined
  }

  public stdBreaks = async (featureLayer: GeoJSONLayer, aq_type: string) => {
    let query = featureLayer.createQuery()
    let avg = new StatisticDefinition({
      onStatisticField: aq_type,
      outStatisticFieldName: "AVG_" + aq_type,
      statisticType: "avg"
    })
    let std = new StatisticDefinition({
      onStatisticField: aq_type,
      outStatisticFieldName: "STD_" + aq_type,
      statisticType: "stddev"
    })
    query.outStatistics = [avg, std]

    var renderer: ClassBreaksRenderer
    renderer = await featureLayer.queryFeatures(query).then(function (response) {
      let stats = response.features[0].attributes
      let attr_avg = "AVG_" + aq_type; //平均值欄位名稱
      let attr_std = "STD_" + aq_type; //標準差欄位名稱
      let avg = Math.round(stats[attr_avg])
      let std = Math.round(stats[attr_std])
      let _renderer = new ClassBreaksRenderer({
        classBreakInfos: changeSymbolDefinition(avg, std)
      })
      return _renderer;
    }).then(function (results) {
      return results
    })
    renderer.field = aq_type
    renderer.classBreakInfos.forEach((item) => {
      (item.symbol as SimpleMarkerSymbol).style = typeSet['mot'].markStyle as "circle" | "square" | "triangle"
    })
    return renderer
  }

  public changeSymbol = async (aq_type: string) => {
    if (this.mobileLayer) {
      let new_renderer: ClassBreaksRenderer
      if (aq_type.startsWith("Pm2_5")) {
        new_renderer = new ClassBreaksRenderer()
        new_renderer.field = aq_type
        new_renderer.classBreakInfos = typeSet['mot'].renderer.classBreakInfos
      }
      else {
        new_renderer = await this.stdBreaks(this.mobileLayer, aq_type)
      }
      this.mobileLayer.renderer = new_renderer
    }
    return
  }
}
