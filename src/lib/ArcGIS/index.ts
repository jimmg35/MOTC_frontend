/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

/* ArcGIS API for javascript */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import ViewerTask from '../ViewerTask'
// import PopupTemplate from "@arcgis/core/PopupTemplate"
// import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"

/* thrid party modules */
// import { autoInjectable, container } from 'tsyringe'

/* Controllers */
import { RealTimeController, SymbologyController } from '../Controller'

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
  viewerTask: ViewerTask
  realTimeController: RealTimeController | undefined
  symbologyController: SymbologyController | undefined

  constructor() {
    this.map = undefined
    this.mapView = undefined
    this.viewerTask = new ViewerTask()
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

    this._registerControllers()

    return { map, mapView }
  }

  private _registerControllers = () => {
    const mapSet = { map: this.map as Map, mapView: this.mapView as MapView }

    this.realTimeController = new RealTimeController({
      mapSet: mapSet
    })

    this.symbologyController = new SymbologyController({
      mapSet: mapSet
    })
  }
}

export default new ArcGIS()
