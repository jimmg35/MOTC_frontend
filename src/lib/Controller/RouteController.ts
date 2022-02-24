/* eslint-disable */

/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import TimeSlider from '@arcgis/core/widgets/TimeSlider'

/* Controllers */
import BaseController, { IBaseControllerParam } from './BaseController'


export interface IRouteControllerParam {
  mapSet: IBaseControllerParam
}

export default class RouteController extends BaseController {
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
      this._clearMap([])
    }
    this.workingStatus = false
  }

  public loadLayer = () => {
  }

}
