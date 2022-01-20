import React, { useContext, useState } from 'react'
import { realTimeMonitorDrawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { arcGisContext } from '../../../lib/MapProvider'
import './RealTimeMonitorDrawer.scss'

const RealTimeMonitorDrawer = () => {
  const [mobileSelect, setmobileSelect] = useState<string>('Pm2_5_AVG')
  const [fixedSelect, setfixedSelect] = useState<string>('Pm2_5')
  const [nationalSelect, setnationalSelect] = useState<string>('Pm2_5')
  const {
    realTimeMonitorTitle = '',
    realTimeMonitorContent,
    realTimeMonitorHide,
    realTimeMonitorSethide
  } = useContext(realTimeMonitorDrawerContext)
  const arcGis = useContext(arcGisContext)

  const handleMobileSelect = (event: SelectChangeEvent) => {
    setmobileSelect(event.target.value as string)
    arcGis.realTimeController?.changeSymbol(mobileSelect, 'mot')
  }

  const handleFixedSelect = (event: SelectChangeEvent) => {
    setfixedSelect(event.target.value as string)
    arcGis.realTimeController?.changeSymbol(fixedSelect, 'fixed')
  }

  const handleNationalSelect = (event: SelectChangeEvent) => {
    setnationalSelect(event.target.value as string)
    arcGis.realTimeController?.changeSymbol(nationalSelect, 'standard')
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
            <MenuItem value={'Pm2_5_AVG'}>PM 2.5 儀器平均</MenuItem>
            <MenuItem value={'Pm2_5_UART'}>PM 2.5 UART</MenuItem>
            <MenuItem value={'Pm2_5_I2C'}>PM 2.5 I2C</MenuItem>
            <MenuItem value={'Voc'}>VOC</MenuItem>
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
            <MenuItem value={'Pm2_5'}>PM 2.5</MenuItem>
            <MenuItem value={'Voc'}>VOC</MenuItem>
            <MenuItem value={'Co'}>CO</MenuItem>
            <MenuItem value={'So2'}>SO2</MenuItem>
            <MenuItem value={'No2'}>NO2</MenuItem>
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
            <MenuItem value={'Pm2_5'}>PM 2.5</MenuItem>
            <MenuItem value={'Pm10'}>PM 10</MenuItem>
            <MenuItem value={'Co'}>CO</MenuItem>
            <MenuItem value={'CO2'}>CO2</MenuItem>
            <MenuItem value={'So2'}>SO2</MenuItem>
            <MenuItem value={'No'}>NO</MenuItem>
            <MenuItem value={'No2'}>NO2</MenuItem>
            <MenuItem value={'Nox'}>NOx</MenuItem>
            <MenuItem value={'O3'}>O3</MenuItem>
          </Select>
        </div>

      </div>

    </Drawer>
  )
}

export default RealTimeMonitorDrawer
