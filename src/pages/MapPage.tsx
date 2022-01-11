import React from 'react'
import './MapPage.scss'
import Header from '../common/MapPage/Header'
import DrawerProvider from '../common/DrawerProvider'
import LeftDrawer from '../common/MapPage/LeftDrawer'

const MapPage = () => {
  return (
    <DrawerProvider>
      <div className="MapPage-root">
        <Header />
        <div className="MapPage-main-body">
          <LeftDrawer />
        </div>
      </div>
    </DrawerProvider>
  )
}

export default MapPage
