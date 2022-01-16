import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

export const map = new Map({
  basemap: 'topo-vector'
})

export const view = new MapView({
  map: map,
  center: [121.52652617526462, 25.025953944255487],
  zoom: 14,
  container: 'viewDiv'
})