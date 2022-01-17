import React, { useContext, useEffect } from 'react'
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
import ArcGisContainer from '../common/MapPage/Map'
import { arcGisContext } from '../lib/MapProvider'

const MapPage = () => {
  const context = useContext(arcGisContext)

  useEffect(() => {
    console.log(context.map)
  }, [])

  return (
    <RealTimeMonitorDrawerProvider>
      <HistoryQueryDrawerProvider>
        <RouteAnalysisDrawerProvider>
          <div className="MapPage-root">
            <Header />
            <div className="MapPage-main-body">
              {/* <div id="viewDiv" className='map-box'></div> */}
              <ArcGisContainer></ArcGisContainer>
              <HistoryQueryDrawer />
              <RealTimeMonitorDrawer />
              <RouteAnalysisDrawer />
            </div>
          </div>
        </RouteAnalysisDrawerProvider>
      </HistoryQueryDrawerProvider>
    </RealTimeMonitorDrawerProvider>
  )
}

export default MapPage
