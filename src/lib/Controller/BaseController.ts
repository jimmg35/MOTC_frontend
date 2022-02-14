/* eslint-disable */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

export interface IController {
	// start: () => void
	// stop: () => void
}

export interface IBaseControllerParam {
	map: Map
	mapView: MapView
}

export default class BaseController implements IController {
	map: Map
	mapView: MapView

	constructor(options: IBaseControllerParam) {
		this.map = options.map
		this.mapView = options.mapView
	}

	// public start = () => { }

	// public stop = () => { }

	protected _clearMap = () => {
		this.map.removeAll()
	}
}
