import React, { useState, useContext, useEffect } from 'react'
import './index.scss'
import { IconButton, Tooltip, Divider } from '@mui/material'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'
import MouseIcon from '@mui/icons-material/Mouse'
import ClearIcon from '@mui/icons-material/Clear'
import { arcGisContext } from '../../lib/MapProvider'
import * as watchUtils from '@arcgis/core/core/watchUtils'
import MapView from '@arcgis/core/views/MapView'
import { projectExtent } from '../../utils/modules/Extent'

type mode = 'current' | 'manual'
type btnMode = 'default' | 'info'

const SpatialQuery = () => {
  const arcgis = useContext(arcGisContext)
  const [currentMode, setcurrentMode] = useState<mode>('current')
  const [xmin, setxmin] = useState<number | undefined>(undefined)
  const [ymin, setymin] = useState<number | undefined>(undefined)
  const [xmax, setxmax] = useState<number | undefined>(undefined)
  const [ymax, setymax] = useState<number | undefined>(undefined)
  const [precision] = useState<number>(1000)
  const [watchHandle, setwatchHandle] = useState<any | undefined>(undefined)
  const [btnStateArray, setbtnStateArray] = useState<Array<btnMode>>(['info', 'default'])

  const startWatchingExtent = () => {
    setwatchHandle(
      watchUtils.whenTrue(arcgis.mapView as MapView, 'stationary', () => {
        console.log(currentMode)
        if (arcgis.mapView?.extent) {
          const _extent = projectExtent(arcgis.mapView)
          setxmin(_extent[0])
          setymin(_extent[1])
          setxmax(_extent[2])
          setymax(_extent[3])
        }
      })
    )
  }

  useEffect(() => {
    startWatchingExtent()
  }, [])

  const handleSetCurrentExtent = () => {
    setbtnStateArray(['info', 'default'])
    setcurrentMode('current')
    startWatchingExtent()
  }

  const handleManualSetExtent = () => {
    setbtnStateArray(['default', 'info'])
    watchHandle?.remove()
    setcurrentMode('manual')
  }

  const handleClearExtent = () => {
    setxmin(0)
    setymin(0)
    setxmax(0)
    setymax(0)
  }

  return (
    <div className='SpatialQuery'>
      <div className='manipulate-group'>
        <Tooltip title="目前地圖範圍">
          <IconButton onClick={handleSetCurrentExtent} color={btnStateArray[0]}>
            <MouseIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="手動選取">
          <IconButton onClick={handleManualSetExtent} color={btnStateArray[1]}>
            <HighlightAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="清除範圍">
          <IconButton onClick={handleClearExtent}>
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </div>

      <Divider className='divider-primary' variant="middle" />

      <div className='extent-group'>
        <Tooltip title="xmin">
          <input type='text' placeholder='xmin' value={xmin !== undefined ? Math.floor(xmin * precision) / precision : undefined} onChange={(event) => { setxmin(Number(event.target.value)) }} disabled></input>
        </Tooltip>
        <Tooltip title="ymin">
          <input type='text' placeholder='ymin' value={ymin !== undefined ? Math.floor(ymin * precision) / precision : undefined} onChange={(event) => { setymin(Number(event.target.value)) }} disabled></input>
        </Tooltip>
        <Tooltip title="xmax">
          <input type='text' placeholder='xmax' value={xmax !== undefined ? Math.floor(xmax * precision) / precision : undefined} onChange={(event) => { setxmax(Number(event.target.value)) }} disabled></input>
        </Tooltip>
        <Tooltip title="ymax">
          <input type='text' placeholder='ymax' value={ymax !== undefined ? Math.floor(ymax * precision) / precision : undefined} onChange={(event) => { setymax(Number(event.target.value)) }} disabled></input>
        </Tooltip>
      </div>

    </div>
  )
}

export default SpatialQuery
