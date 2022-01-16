import React, { useContext } from 'react'
import { mapContext } from '../../../lib/MapProvider'
import './Map.scss'
// import Map from '@arcgis/core/Map'
// import MapView from '@arcgis/core/views/MapView'

const Map = () => {
  const aa = useContext(mapContext)
  console.log(aa)
  return (
    <div id='viewDiv' className='map-box'>

    </div>
  )
}

export default Map