import React, { useContext, useState } from 'react'
import { realTimeMonitorDrawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import './RealTimeMonitorDrawer.scss'

const RealTimeMonitorDrawer = () => {
  const [mobileSelect, setmobileSelect] = useState<string>('0')
  const [fixedSelect, setfixedSelect] = useState<string>('0')
  const [nationalSelect, setnationalSelect] = useState<string>('0')
  const {
    realTimeMonitorTitle = '',
    realTimeMonitorContent,
    realTimeMonitorHide,
    realTimeMonitorSethide
  } = useContext(realTimeMonitorDrawerContext)

  const handleMobileSelect = (event: SelectChangeEvent) => {
    setmobileSelect(event.target.value as string)
  }

  const handleFixedSelect = (event: SelectChangeEvent) => {
    setfixedSelect(event.target.value as string)
  }

  const handleNationalSelect = (event: SelectChangeEvent) => {
    setnationalSelect(event.target.value as string)
  }

  const handleClose = () => {
    realTimeMonitorSethide(true)
  }

  return (
    <Drawer
      anchor='right'
      title={realTimeMonitorTitle}
      open={!realTimeMonitorHide}
      onClose={handleClose}>
      {realTimeMonitorContent}

      <div className="real-time-monitor">

        <div className='select-cell'>
          <InputLabel id="mobile-label">移動點顯示</InputLabel>
          <Select
            labelId="mobile-label"
            value={mobileSelect}
            id="mobile-select"
            className="mobile-select"
            onChange={handleMobileSelect}
          >
            <MenuItem value={'0'}>PM 2.5 儀器平均</MenuItem>
            <MenuItem value={'1'}>PM 2.5 UART</MenuItem>
            <MenuItem value={'2'}>PM 2.5 I2C</MenuItem>
            <MenuItem value={'3'}>VOC</MenuItem>
          </Select>
        </div>

        <div className='select-cell'>
          <InputLabel id="mobile-label">固定點顯示</InputLabel>
          <Select
            labelId="mobile-label"
            value={fixedSelect}
            id="mobile-select"
            className="mobile-select"
            onChange={handleFixedSelect}
          >
            <MenuItem value={'0'}>PM 2.5</MenuItem>
            <MenuItem value={'1'}>VOC</MenuItem>
            <MenuItem value={'2'}>CO</MenuItem>
            <MenuItem value={'3'}>SO2</MenuItem>
            <MenuItem value={'4'}>NO2</MenuItem>
          </Select>
        </div>

        <div className='select-cell'>
          <InputLabel id="mobile-label">國家級監測站顯示</InputLabel>
          <Select
            labelId="mobile-label"
            value={nationalSelect}
            id="mobile-select"
            className="mobile-select"
            onChange={handleNationalSelect}
          >
            <MenuItem value={'0'}>PM 2.5</MenuItem>
            <MenuItem value={'1'}>PM 10</MenuItem>
            <MenuItem value={'2'}>CO</MenuItem>
            <MenuItem value={'3'}>CO2</MenuItem>
            <MenuItem value={'4'}>SO2</MenuItem>
            <MenuItem value={'5'}>NO</MenuItem>
            <MenuItem value={'6'}>NO2</MenuItem>
            <MenuItem value={'7'}>NOx</MenuItem>
            <MenuItem value={'8'}>O3</MenuItem>
          </Select>
        </div>

      </div>

    </Drawer>
  )
}

export default RealTimeMonitorDrawer
