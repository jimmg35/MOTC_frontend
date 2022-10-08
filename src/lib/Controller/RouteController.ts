/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import FeatureFilter from '@arcgis/core/views/layers/support/FeatureFilter'
/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import {routeAnalysisFields,fixedHistoryFields} from './RouteController/featureField'
import {routeTemplateContent,fixedHistoryTemplateContent} from './RouteController/templateContent'
import { routeRendererContent,routeCORendererContent,fixedHistoryRendererContent } from './RouteController/rendererContent'
import api from'../../api'
import { template } from 'lodash'

const typeSet = {
  mot: {
    title: '移動式感測器路段統計',
    template: new PopupTemplate(routeTemplateContent),
    renderer: new ClassBreaksRenderer(routeRendererContent)

  }
}
export interface IRouteQueryParams {
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  extent: number[] | undefined[] | string
  interval_st: string | string
  interval_et: string | string
  weekdays: string[] | string
  rmdays: string[] | string
}

export interface IRouteControllerParam {
  mapSet: IBaseControllerParam
}

export default class RouteController extends BaseController {
  routeLayer: GeoJSONLayer | undefined
  fixedHistoryLayer: GeoJSONLayer | undefined
  workingStatus: boolean

  constructor(options: IRouteControllerParam) {
    super({
      map: options.mapSet.map,
      mapView: options.mapSet.mapView
    })
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
      // if (this.routeLayer) {
      //   this._clearMap([this.routeLayer])
      // }
      if (this.map.layers){
        this.map.removeAll()
      }
      if (this.mapView.graphics){
        this.mapView.graphics.removeAll()
      }
    }
    this.workingStatus = false
  }

  public loadLayer = () => {
    // this.routeLayer = new GeoJSONLayer({
    //   title: '移動感測器路段統計',
    //   fields: routeAnalysisFields,
    //   popupTemplate: new PopupTemplate(routeTemplateContent),
    //   renderer: new ClassBreaksRenderer(routeRendererContent)
    // })
    // this.map.add(this.routeLayer)
    
  }
  public query = async (params: IRouteQueryParams) => {
    if (this.routeLayer || this.fixedHistoryLayer) {
      console.log('clearmap')
      // this._clearMap([this.routeLayer])
      this.map.removeAll()
    }
    const value = await this.fetchLayerData(params)
    const fixedValue = await this.fetchFixedLayerData(params)
    console.log(fixedValue)
    
    if (value) {
      this.routeLayer = new GeoJSONLayer({
        title: '移動式感測器路段統計',
        url: value,
        fields: routeAnalysisFields,
        popupTemplate: new PopupTemplate(routeTemplateContent),
        renderer: new ClassBreaksRenderer(routeRendererContent)
      })
      if (fixedValue.features !== null){
        // console.log(JSON.stringify(fixedValue))
        const blob = new Blob([JSON.stringify(fixedValue)], {
          type: "application/json"
        })

        this.fixedHistoryLayer = new GeoJSONLayer({
          title: '固定式感測器歷史資料',
          url:  URL.createObjectURL(blob), 
          fields: fixedHistoryFields,
          popupTemplate: new PopupTemplate(fixedHistoryTemplateContent),
          renderer: new ClassBreaksRenderer(fixedHistoryRendererContent)
        })
        console.log(this.fixedHistoryLayer)
        this.map.add(this.fixedHistoryLayer)
      }
      else { 
        alert('該時段或區域無固定點資料')
      }
      console.log(value)
      this.map.add(this.routeLayer)


      this.routeLayer.when(() => {
        this.mapView.goTo(this.routeLayer?.fullExtent)
      })
    } else {
      alert('該時段查無資料')
      return false
    }
  } 
  public fetchLayerData = async (params: IRouteQueryParams) => {
    let response: Response
    response = await api.route.QueryRouteAnalysis2(params)
    if (response.status ===200) {
      return api.route.routeJsonPath
    }
    return undefined
  }
  public fetchFixedLayerData = async (params: IRouteQueryParams) => {
    let response: Response
    response = await api.route.QueryFixedHistory(params)
    if (response.status === 200){
      return response.json()
    }
    return undefined
  }

}
