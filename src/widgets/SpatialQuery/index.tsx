import React from 'react'
import './index.scss'
import { IconButton, Tooltip, Divider } from '@mui/material'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'
import MouseIcon from '@mui/icons-material/Mouse'
import ClearIcon from '@mui/icons-material/Clear'

const SpatialQuery = () => {
  return (
    <div className='SpatialQuery'>
      <div className='manipulate-group'>
        <Tooltip title="目前地圖範圍">
          <IconButton color="primary" >
            <MouseIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="手動選取">
          <IconButton color="primary" >
            <HighlightAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="清除範圍">
          <IconButton color="primary" >
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </div>

      <Divider className='divider-primary' variant="middle" />

      <div className='extent-group'>
        <input type='text' placeholder='xmin'></input>
        <input type='text' placeholder='ymin'></input>
        <input type='text' placeholder='xmax'></input>
        <input type='text' placeholder='xmax'></input>
      </div>

    </div>
  )
}

export default SpatialQuery
