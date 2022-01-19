/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

/* ArcGIS API for javascript */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import ViewerTask from '../ViewerTask'
// import PopupTemplate from "@arcgis/core/PopupTemplate"
// import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"

/* thrid party modules */
// import { autoInjectable } from 'tsyringe'

/* Controllers */
import { RealTimeController } from '../Controller'

export interface IMapOptions {
  basemap: string
}

export interface IMapViewOptions {
  center: number[]
  zoom: number | undefined
  container: string | HTMLDivElement | undefined
}

export interface IArcGIS {
  realTimeController: RealTimeController
}

class ArcGIS {
  map: Map | undefined
  mapView: MapView | undefined
  viewerTask: ViewerTask
  realTimeController: RealTimeController
  // template: PopupTemplate
  // renderer: ClassBreaksRenderer
  // fixedTemplate: PopupTemplate
  // fixedRenderer: ClassBreaksRenderer
  // standardTemplate: PopupTemplate
  // standardRenderer: ClassBreaksRenderer

  constructor(options: IArcGIS) {
    this.map = undefined
    this.mapView = undefined
    this.viewerTask = new ViewerTask()
    this.realTimeController = options.realTimeController
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
    return { map, mapView }
  }
}

const arcGis = new ArcGIS({
  realTimeController: new RealTimeController()
})

export default arcGis
