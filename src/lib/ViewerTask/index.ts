/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

export type Task = (map: Map, mapView: MapView) => void

class ViewerTask {
  map: Map | undefined
  mapView: MapView | undefined
  private stack: Task[]

  constructor(map?: Map, mapView?: MapView) {
    this.map = map
    this.mapView = mapView
    this.stack = []
  }

  public setMap = (map: Map) => {
    if (this.map !== undefined) {
      console.warn('viewer already exist, setMapView will be ignore')
      return
    }
    this.map = map
  }

  /**
   * 此方法會自動執行queue中的tasks
   * @param mapView
   * @returns
   */
  public setMapView = (mapView: MapView) => {
    if (this.mapView !== undefined) {
      console.warn('viewer already exist, setMapView will be ignore')
      return
    }
    this.mapView = mapView
    this.runTasks()
  }

  public isMapViewReady = () => {
    return this.mapView !== undefined
  }

  public addTask = (task: Task) => {
    if (this.map !== undefined && this.mapView !== undefined) {
      task(this.map, this.mapView)
    } else {
      this.stack.push(task)
    }
  }

  public runTasks = () => {
    if (this.map !== undefined && this.mapView !== undefined) {
      while (this.stack.length > 0) {
        const task = this.stack.pop()
        if (task) {
          task(this.map, this.mapView)
        }
      }
    }
  }
}

export default ViewerTask
