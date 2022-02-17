/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import { mobileHistoryFields } from './HistoryController/featureField'
import { mobileTemplateContent } from './RealTimeController/templateContent'
import { mobileRendererContent } from './RealTimeController/rendererContent'
import { Extent } from '@arcgis/core/geometry'
import api from '../../api'
import { projectExtent } from '../../utils/modules/Extent'

export interface HistoryQueryParams {
  startDateTime: number
  endDateTime: number
  DeviceList: string | null
}

export interface IHistoryControllerParam {
  mapSet: IBaseControllerParam
}

export default class HistoryController extends BaseController {
  mobileLayer: GeoJSONLayer | undefined
  workingStatus: boolean

  constructor(options: IHistoryControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
    this.workingStatus = false
  }

  public start = () => {
    if (this.workingStatus === false) { }
    this.workingStatus = true
  }

  public stop = () => {
    if (this.workingStatus === true) {
      this._clearMap()
    }
    this.workingStatus = false
  }

  public query = async (params: HistoryQueryParams) => {
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
      })
    } else {
      alert('該時段查無資料')
    }
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
      const _extent = projectExtent(this.mapView)
      response = await api.history.QueryMobileHistory({
        startDateTime: params.startDateTime,
        endDateTime: params.endDateTime
      }, _extent)
    }
    if (response.status === 200) {
      return api.history.historyJsonPath
    }
    return undefined
  }
}
