/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import FeatureFilter from '@arcgis/core/views/layers/support/FeatureFilter'
/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'
import {routeAnalysisFields} from './RouteController/featureField'
import {routeTemplateContent} from './RouteController/templateContent'
import { routeRendererContent } from './RouteController/rendererContent'
import api from'../../api'
import { template } from 'lodash'

const typeSet = {
  mot: {
    title: '移動式汙染源路段統計',
    template: new PopupTemplate(routeTemplateContent),
    renderer: new ClassBreaksRenderer(routeRendererContent)

  }
}
export interface RouteQueryParams {
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  _extent: number[]
  interval_st: string| null
  interval_et: string| null
  weekdays: number[]|null
  rmdays: string[]|null
}
export interface IRouteControllerParam {
  mapSet: IBaseControllerParam
}

export default class RouteController extends BaseController {
  routeLayer: GeoJSONLayer | undefined
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
      if (this.routeLayer) {
        this._clearMap([this.routeLayer])
      }
      
    }
    this.workingStatus = false
  }

  public loadLayer = () => {
    this.routeLayer = new GeoJSONLayer({
      title: '移動感測器路段統計',
      fields: routeAnalysisFields,
      popupTemplate: new PopupTemplate(routeTemplateContent),
      renderer: new ClassBreaksRenderer(routeRendererContent)
    })
    this.map.add(this.routeLayer)
  }

  public fetchLayerData = async (params: RouteQueryParams) => {
    let response: Response
    await api.route.QueryRouteAnalysis(params)
  }
}
