import React, { useEffect } from 'react'
import './MapPage.scss'
import Header from '../common/MapPage/Header'
import {
  RealTimeMonitorDrawerProvider,
  HistoryQueryDrawerProvider,
  RouteAnalysisDrawerProvider
} from '../common/DrawerProvider'
import HistoryQueryDrawer from '../common/MapPage/HistoryQueryDrawer'
import RealTimeMonitorDrawer from '../common/MapPage/RealTimeMonitorDrawer'
import RouteAnalysisDrawer from '../common/MapPage/RouteAnalysisDrawer'
import { MapProvider } from '../lib/MapProvider'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

const MapPage = () => {
  useEffect(() => {
    const map = new Map({
      basemap: 'topo-vector'
    })
    const view = new MapView({
      map: map,
      center: [121.52652617526462, 25.025953944255487], // Longitude, latitude
      zoom: 13, // Zoom level
      container: 'viewDiv' // Div element
    })
    view.zoom = 14
  }, [])

  return (
    <MapProvider>
      <RealTimeMonitorDrawerProvider>
        <HistoryQueryDrawerProvider>
          <RouteAnalysisDrawerProvider>
            <div className="MapPage-root">
              <Header />
              <div className="MapPage-main-body">
                <div id="viewDiv" className='map-box'></div>
                <HistoryQueryDrawer />
                <RealTimeMonitorDrawer />
                <RouteAnalysisDrawer />
              </div>
            </div>
          </RouteAnalysisDrawerProvider>
        </HistoryQueryDrawerProvider>
      </RealTimeMonitorDrawerProvider>
    </MapProvider>
  )
}

export default MapPage
