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

  const arcGis = useContext(arcGisContext)

  useEffect(() => {
    (window as any).ArcGIS = arcGis
    arcGis.createMapAndMapView({
      basemap: 'osm-dark-gray'
    }, {
      center: [120.309061, 22.623820],
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
