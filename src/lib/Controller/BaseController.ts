/* eslint-disable */
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Layer from '@arcgis/core/layers/Layer';

export interface IController {
	workingStatus: boolean
	start: () => void
	stop: () => void
}

export interface IBaseControllerParam {
	map: Map
	mapView: MapView
}

export default class BaseController implements IController {
	map: Map
	mapView: MapView
	workingStatus: boolean

	constructor(options: IBaseControllerParam) {
		this.map = options.map
		this.mapView = options.mapView
		this.workingStatus = false
	}

	public start = () => { }

	public stop = () => { }

	protected _clearMap = (layers: Layer[]) => {
		this.map.removeMany(layers)
	}
}
