/* eslint-disable */

/* ArcGIS API for javascript */
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
import Extent from '@arcgis/core/geometry/Extent'
import * as projection from '@arcgis/core/geometry/projection'
import SpatialReference from '@arcgis/core/geometry/SpatialReference'
import Geometry from '@arcgis/core/geometry/Geometry'
import Polygon from '@arcgis/core/geometry/Polygon'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import { mobileTemplateContent, fixedTemplateContent, standardTemplateContent } from './RealTimeController/templateContent'
import { mobileRendererContent, fixedRendererContent, standardRendererContent } from './RealTimeController/rendererContent'
import api from '../../api'

const symbologySet = {
  mot: {
    template: new PopupTemplate(mobileTemplateContent),
    renderer: new ClassBreaksRenderer(mobileRendererContent)
  },
  fixed: {
    template: new PopupTemplate(fixedTemplateContent),
    renderer: new ClassBreaksRenderer(fixedRendererContent)
  },
  standard: {
    template: new PopupTemplate(standardTemplateContent),
    renderer: new ClassBreaksRenderer(standardRendererContent)
  }
}

export interface IRealTimeControllerParam {
  mapSet: IBaseControllerParam
}

export interface ISymbology {
  template: PopupTemplate | undefined
  renderer: ClassBreaksRenderer | undefined
}

export type sensor_type = 'mot' | 'fixed' | 'standard'

export default class RealTimeController extends BaseController {
  motFeatureLayer: FeatureLayer | undefined
  fixedFeatureLayer: FeatureLayer | undefined
  standardFeatureLayer: FeatureLayer | undefined
  mobileSymbology: ISymbology | undefined
  fixedSymbology: ISymbology | undefined
  standardSymbology: ISymbology | undefined

  constructor(options: IRealTimeControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
  }

  public start = () => {
    this.getFeatureLayer('mot')
    this.getFeatureLayer('fixed')
    this.getFeatureLayer('standard')
  }

  /**
   * 繪製即時FeatureLayer
   * @param sensorType
   */
  public getFeatureLayer = async (sensorType: sensor_type) => {
    let template = new PopupTemplate()
    let renderer = new ClassBreaksRenderer()
    let extent = new Extent()

    template = symbologySet[sensorType].template
    renderer = symbologySet[sensorType].renderer
    if (sensorType === 'fixed') {
      extent = this.mapView.extent
    }

    await this.fetchLayerData(sensorType, extent)
  }

  /**
   * 請求圖層資料
   * @param sensorType
   * @param extent
   */
  public fetchLayerData = async (sensorType: sensor_type, extent?: Extent) => {
    if (sensorType === 'mot') {
      return await api.realTime.getRealTimeMobile()
    }

    if (sensorType === 'standard') {
      return await api.realTime.getRealTimeStation()
    }

    if (sensorType === 'fixed') {
      let area = Polygon.fromExtent(extent as Extent)
      projection.load()
      let outSpatialReference = new SpatialReference({
        wkid: 4326
      })
      let prj = projection.project(area, outSpatialReference)
      let _extent = [(prj as Geometry).extent.xmin, (prj as Geometry).extent.ymin, (prj as Geometry).extent.xmax, (prj as Geometry).extent.ymax]
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      return await api.realTime.getRealTimeFixed(_extent, requestOptions)
    }
  }
}
