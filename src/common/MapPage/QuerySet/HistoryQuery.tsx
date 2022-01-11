import React from 'react'
import { MobileDateTimePicker } from '@mui/lab'
import { TextField, InputLabel, MenuItem, Button } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import './HistoryQuery.scss'
import SettingsIcon from '@mui/icons-material/Settings'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const HistoryQuery = () => {
  // const [value, setValue] = React.useState<Date | null>(
  //   new Date('2018-01-01T00:00:00.000Z')
  // )
  // const [value, setValue] = React.useState<Date | null>(new Date())
  const handleMobileSelect = (event: SelectChangeEvent) => {
    console.log(event.target.value as string)
  }

  const handleFixedSelect = (event: SelectChangeEvent) => {
    console.log(event.target.value as string)
  }

  return (
    <div className="history-query">
      <LocalizationProvider dateAdapter={AdapterDateFns}>

        <div className='select-row'>
          <div className='select-cell'>
            <InputLabel id="start-date">起始日期</InputLabel>
            <MobileDateTimePicker
              value={new Date()}
              onChange={(newValue) => {
                console.log(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          <div className='select-cell'>
            <InputLabel id="end-date">結束日期</InputLabel>
            <MobileDateTimePicker
              value={new Date()}
              onChange={(newValue) => {
                console.log(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

        </div>

        <div className='select-row'>
          <div className='select-cell-btn'>
            <Button
              className='setting-btn'
              variant="outlined"
              startIcon={<SettingsIcon />}>
              更多選項
            </Button>
          </div>

          <div className='select-cell-btn'>
            <Button
              className='setting-btn'
              variant="contained"
              startIcon={<GpsFixedIcon />}>
              查詢固定點
            </Button>
          </div>

          <div className='select-cell-btn'>
            <Button
              className='setting-btn'
              variant="contained"
              startIcon={<TrendingFlatIcon />}>
              查詢移動點
            </Button>
          </div>
        </div>

        <hr></hr>

        <div className='select-row'>
          <div className='select-cell'>
            <InputLabel id="mobile-label">移動點顯示</InputLabel>
            <Select
              labelId="mobile-label"
              id="mobile-select"
              className="mobile-select"
              onChange={handleMobileSelect}
            >
              <MenuItem value={0}>PM 2.5 儀器平均</MenuItem>
              <MenuItem value={1}>PM 2.5 UART</MenuItem>
              <MenuItem value={2}>PM 2.5 I2C</MenuItem>
              <MenuItem value={3}>VOC</MenuItem>
            </Select>
          </div>

          <div className='select-cell'>
            <InputLabel id="mobile-label">固定點顯示</InputLabel>
            <Select
              labelId="mobile-label"
              id="mobile-select"
              className="mobile-select"
              onChange={handleFixedSelect}
            >
              <MenuItem value={0}>PM 2.5</MenuItem>
              <MenuItem value={1}>VOC</MenuItem>
              <MenuItem value={2}>CO</MenuItem>
              <MenuItem value={3}>SO2</MenuItem>
              <MenuItem value={4}>NO2</MenuItem>
            </Select>
          </div>
        </div>

      </LocalizationProvider>
    </div>
  )
}

export default HistoryQuery
