/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import ViewerTask from '../ViewerTask'

export interface IMapOptions {
  basemap: string
}

export interface IMapViewOptions {
  center: number[]
  zoom: number | undefined
  container: string | HTMLDivElement | undefined
}

class ArcGIS {
  map: Map | undefined
  mapView: MapView | undefined
  viewerTask: ViewerTask

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
    return { map, mapView }
  }
}

export default new ArcGIS()
