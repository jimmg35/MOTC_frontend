import React, { useState, useContext, useEffect } from 'react'
import './index.scss'
import { IconButton, Tooltip, Divider } from '@mui/material'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'
import MouseIcon from '@mui/icons-material/Mouse'
import ClearIcon from '@mui/icons-material/Clear'
import { arcGisContext } from '../../lib/MapProvider'
import * as watchUtils from '@arcgis/core/core/watchUtils'
import MapView from '@arcgis/core/views/MapView'
import { projectExtent, geometry2Extent } from '../../utils/modules/Extent'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import Sketch from '@arcgis/core/widgets/Sketch'

const mockSketch = {
  clickDrawingButton: (sketchId: string) => {
    const rectangleBtn = document.getElementById(sketchId)?.getElementsByTagName('calcite-action')[1] as HTMLButtonElement
    rectangleBtn.click()
  },
  clickPanButton: (sketchId: string) => {
    const cursorBtn = document.getElementById(sketchId)?.getElementsByTagName('calcite-action')[0] as HTMLButtonElement
    cursorBtn.click()
  }
}

type mode = 'current' | 'manual'
type btnMode = 'default' | 'info'

const SpatialQuery = () => {
  const arcgis = useContext(arcGisContext)
  const [, setcurrentMode] = useState<mode>('current')
  const [xmin, setxmin] = useState<number | undefined>(undefined)
  const [ymin, setymin] = useState<number | undefined>(undefined)
  const [xmax, setxmax] = useState<number | undefined>(undefined)
  const [ymax, setymax] = useState<number | undefined>(undefined)
  const [precision] = useState<number>(1000)
  const [watchHandle, setwatchHandle] = useState<any | undefined>(undefined)
  const [btnStateArray, setbtnStateArray] = useState<Array<btnMode>>(['info', 'default'])
  const [sketchId] = useState<string>('sketchTool')
  const [currentSketch, setcurrentSketch] = useState<Sketch | undefined>(undefined)
  // const [, setsketchLayer] = useState<GraphicsLayer | undefined>(undefined)

  const startWatchingExtent = () => {
    if (watchHandle === undefined) {
      if (currentSketch) {
        mockSketch.clickPanButton(sketchId)
      }
      setwatchHandle(
        watchUtils.whenTrue(arcgis.mapView as MapView, 'stationary', () => {
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
  }

  const initSketchWidget = () => {
    const layer = new GraphicsLayer({ listMode: 'hide' })
    arcgis.map?.add(layer)
    const sketch = new Sketch({
      view: arcgis.mapView,
      layer: layer,
      container: document.getElementById(sketchId) as HTMLElement,
      visibleElements: {
        createTools: {
          point: false,
          circle: false,
          polygon: false,
          polyline: false
        },
        selectionTools: {
          'rectangle-selection': false,
          'lasso-selection': false
        },
        undoRedoMenu: false,
        settingsMenu: false
      }
    })
    sketch.on('create', (event) => {
      if (event.state === 'complete') {
        layer.remove(event.graphic)
        const _extent = geometry2Extent(event.graphic.geometry)
        setxmin(_extent[0])
        setymin(_extent[1])
        setxmax(_extent[2])
        setymax(_extent[3])
      }
    })
    setcurrentSketch(sketch)
    // (window as any).sketch = sketch
  }

  const startManualMode = () => {
    if (currentSketch?.activeTool === null) {
      mockSketch.clickDrawingButton(sketchId)
    }
  }

  useEffect(() => {
    startWatchingExtent()
    initSketchWidget()
  }, [])

  const handleSetCurrentExtent = () => {
    setcurrentMode('current')
    setbtnStateArray(['info', 'default'])
    startWatchingExtent()
  }

  const handleManualSetExtent = () => {
    setcurrentMode('manual')
    setbtnStateArray(['default', 'info'])
    watchHandle?.remove()
    setwatchHandle(undefined)
    startManualMode()
  }

  const handleClearExtent = () => {
    setxmin(0)
    setymin(0)
    setxmax(0)
    setymax(0)
  }

  return (
    <div className='SpatialQuery'>
      <div id={sketchId} className='sketch-tool'></div>

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
