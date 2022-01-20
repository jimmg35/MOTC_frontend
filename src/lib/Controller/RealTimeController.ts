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
import geometry, { Point } from "@arcgis/core/geometry"
import Graphic from '@arcgis/core/Graphic'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import { mobileTemplateContent, fixedTemplateContent, standardTemplateContent } from './RealTimeController/templateContent'
import { mobileRendererContent, fixedRendererContent, standardRendererContent } from './RealTimeController/rendererContent'
import { mobileFeatureFields, fixedFeatureFields, standardFeatureFields } from './RealTimeController/featureField'
import api from '../../api'
import { resolve } from 'path'

const typeSet = {
  mot: {
    title: "移動式污染源監測站",
    template: new PopupTemplate(mobileTemplateContent),
    renderer: new ClassBreaksRenderer(mobileRendererContent),
    field: mobileFeatureFields
  },
  fixed: {
    title: "固定污染源監測站",
    template: new PopupTemplate(fixedTemplateContent),
    renderer: new ClassBreaksRenderer(fixedRendererContent),
    field: fixedFeatureFields
  },
  standard: {
    title: "國家級空氣品質監測站",
    template: new PopupTemplate(standardTemplateContent),
    renderer: new ClassBreaksRenderer(standardRendererContent),
    field: standardFeatureFields
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
  // motFeatureLayer: FeatureLayer | undefined
  // fixedFeatureLayer: FeatureLayer | undefined
  // standardFeatureLayer: FeatureLayer | undefined
  featureLayerSet: { [key: string]: FeatureLayer }

  constructor(options: IRealTimeControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
    this.featureLayerSet = {}
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

    template = typeSet[sensorType].template
    renderer = typeSet[sensorType].renderer
    if (sensorType === 'fixed') {
      extent = this.mapView.extent
    }

    // 請求資料
    const geoJson = await this.fetchLayerData(sensorType, extent)
    // 產出graphic實體
    const graphicArray: Array<Graphic> = this.createGraphics(geoJson, sensorType)
    // 使用graphic陣列產出featureLayer實體
    const featureLayer: FeatureLayer = this.createFeatureLayer(graphicArray, sensorType)
    this.featureLayerSet[sensorType] = featureLayer
    this.map.add(this.featureLayerSet[sensorType])
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
      // console.log(extent)
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

  /**
   * 根據傳入的GeoJson產出Graphic陣列
   * @param data 
   * @param sensorType 
   * @returns 
   */
  public createGraphics = (data: any, sensorType: sensor_type): Array<Graphic> => {
    return data.features.map((feature: any, i: any) => {
      const _point: Point = new Point({
        x: feature.geometry.coordinates[0],
        y: feature.geometry.coordinates[1]
      })
      let _attribute: Object = {}
      let graphic: Graphic

      if (sensorType === 'mot') {
        _attribute = {
          OBJECTID: i,
          Device_Name: feature.properties['Device_Name'],
          Datetime: new Date(feature.properties['Datetime']).getTime(),
          Flow: feature.properties['Flow'],
          Pm2_5_UART: feature.properties['Pm2_5_UART'],
          Pm2_5_I2C: feature.properties['Pm2_5_I2C'],
          Pm2_5_AVG: feature.properties['Pm2_5_AVG'],
          Voc: feature.properties['Voc'],
          Temperature: feature.properties['Temperature'],
          Humidity: feature.properties['Humidity'],
          Speed: feature.properties['Speed']
        }
      }

      if (sensorType === 'fixed') {
        _attribute = {
          OBJECTID: i,
          Device_Name: feature.properties['Device_Name'],
          CreatedTime: new Date(feature.properties['CreatedTime']).getTime(),
          Datetime: new Date(feature.properties['Datetime']).getTime(),
          OnlineStatus: feature.properties['onlineStatus'],
          Pm2_5: feature.properties['Pm2_5'],
          Temperature: feature.properties['Temperature'],
          Humidity: feature.properties['Humidity'],
          Co: feature.properties['Co'] === null ? -999 : feature.properties['Co'],
          Voc: feature.properties['Voc'],
          So2: feature.properties['So2'] === null ? -999 : feature.properties['So2'],
          No2: feature.properties['No2']
        }
      }

      if (sensorType === 'standard') {
        _attribute = {
          OBJECTID: i,
          Device_Name: feature.properties['Station_Name_'],
          CreatedTime: new Date(feature.properties['CreatedTime']).getTime(),
          Datetime: new Date(feature.properties['Datetime']).getTime(),
          Pm2_5: feature.properties['Pm2_5'],
          Pm10: feature.properties['Pm10'],
          Temperature: feature.properties['Temperature'],
          Humidity: feature.properties['RelativeHumidity'],
          Co: feature.properties['Co'],
          Co2: feature.properties['Co2'],
          So2: feature.properties['So2'],
          No2: feature.properties['No2'],
          No: feature.properties['No'],
          Nox: feature.properties['Nox'],
          O3: feature.properties['O3'],
          Rainfall: feature.properties['Rainfall'],
          Wind_Speed: feature.properties['Wind_Speed'],
          Wind_Direction: feature.properties['Wind_Direction'],
          Wind_Speed_HR: feature.properties['Wind_Speed_HR']
        }
      }

      graphic = new Graphic({
        attributes: _attribute,
        geometry: _point
      })
      return graphic
    })
  }

  /**
   * 根據sensorType產出不同的featureLayer實體
   * @param graphics 
   * @param sensorType 
   * @returns 
   */
  public createFeatureLayer = (graphics: Array<Graphic>, sensorType: sensor_type): FeatureLayer => {
    return new FeatureLayer({
      title: typeSet[sensorType].title,
      source: graphics,
      fields: typeSet[sensorType].field as __esri.FieldProperties[],
      objectIdField: "OBJECTID",
      popupTemplate: typeSet[sensorType].template,
      renderer: typeSet[sensorType].renderer
      //timeInfo: {
      //    startField: "Datetime"
      //}
    })
  }

  public updateData = async () => {

  }
}
