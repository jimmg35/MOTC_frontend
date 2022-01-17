import React, { useContext, useEffect } from 'react'
import { arcGisContext } from '../../../lib/MapProvider'
import './ArcGisContainer.scss'

export type CesiumContainerProps = {
  id?: string
}

const ArcGisContainer = (props: CesiumContainerProps) => {
  const {
    id = 'arcgis-container'
  } = props

  const context = useContext(arcGisContext)

  useEffect(() => {
    context.createMapAndMapView({
      basemap: 'topo-vector'
    }, {
      center: [121.52652617526462, 25.025953944255487],
      zoom: 13,
      container: id
    })
  }, [])

  return (
    <div id={id} className='map-box'>

    </div>
  )
}

export default ArcGisContainer
