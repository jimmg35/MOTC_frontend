/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

/* ArcGIS API for javascript */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import ViewerTask from '../ViewerTask'
import timeSlider from '../../widgets/arcgis/TimeSlider'
import TimeSlider from '@arcgis/core/widgets/TimeSlider'
import layerList from '../../widgets/arcgis/LayerList'
import LayerList from '@arcgis/core/widgets/LayerList'
import Expand from '@arcgis/core/widgets/Expand'

/* Controllers */
import { RealTimeController, HistoryController, RouteController } from '../Controller'
import ControllerManager from '../ControllerManager'

export interface IMapOptions {
  basemap: string
}

export interface IMapViewOptions {
  center: number[]
  zoom: number | undefined
  container: string | HTMLDivElement | undefined
}

export class ArcGIS {
  map: Map | undefined
  mapView: MapView | undefined
  timeSlider: TimeSlider | undefined
  layerList: LayerList | undefined
  viewerTask: ViewerTask
  controllerManager: ControllerManager | undefined

  constructor() {
    this.map = undefined
    this.mapView = undefined
    this.timeSlider = undefined
    this.layerList = undefined
    this.viewerTask = new ViewerTask()
    this.controllerManager = new ControllerManager()
  }

  public createMapAndMapView = (mapOptions: IMapOptions, viewOptions: IMapViewOptions) => {
    const map = new Map({
      basemap: mapOptions.basemap
    })
    const mapView = new MapView({
      map: map,
      center: viewOptions.center,
      zoom: viewOptions.zoom,
      container: viewOptions.container
    })
    this.map = map
    this.mapView = mapView
    this.viewerTask.setMap(map)
    this.viewerTask.setMapView(mapView)

    this.mapView.when(() => {
      this._registerWidgets()
      this._registerControllers()
    })

    return { map, mapView }
  }

  private _registerWidgets = () => {
    this.timeSlider = timeSlider
    const timeExpand = new Expand({
      expandIconClass: 'esri-icon-dashboard',
      expandTooltip: 'timeSlider',
      content: timeSlider,
      expanded: false
    })
    layerList.view = this.mapView as MapView
    this.layerList = layerList
    const layerListExpand = new Expand({
      expandIconClass: 'esri-icon-layer-list',
      expandTooltip: 'Legend',
      content: layerList,
      expanded: false
    })
    this.mapView?.ui.add(layerListExpand, 'bottom-left')
    this.mapView?.ui.add(timeExpand, 'top-left')
  }

  private _registerControllers = () => {
    const mapSet = { map: this.map as Map, mapView: this.mapView as MapView }

    const realTimeController = new RealTimeController({
      mapSet: mapSet,
      updateMode: true
    })
    const historyController = new HistoryController({
      mapSet: mapSet,
      timeSlider: this.timeSlider as TimeSlider
    })
    const routeController = new RouteController({
      mapSet: mapSet
    })

    this.controllerManager?.register('realTime', realTimeController)
    this.controllerManager?.register('history', historyController)
    this.controllerManager?.register('route', routeController)
    this.controllerManager?.activate('realTime')
  }
}

export default new ArcGIS()
