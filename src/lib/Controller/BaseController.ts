/* eslint-disable */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

export interface IBaseControllerParam {
	map: Map
	mapView: MapView
}

export default class BaseController {
	map: Map
	mapView: MapView

	constructor(options: IBaseControllerParam) {
		this.map = options.map
		this.mapView = options.mapView
	}
}
