import React, { useContext, useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { routeAnalysisDrawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
import './RouteAnalysisDrawer.scss'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TextField, InputLabel, MenuItem, Button, OutlinedInput, Box, Chip } from '@mui/material'
import { MobileDateTimePicker, TimePicker } from '@mui/lab'
import SettingsIcon from '@mui/icons-material/Settings'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DatePicker from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const weekEnum = [
  { name: '星期一' },
  { name: '星期二' },
  { name: '星期三' },
  { name: '星期四' },
  { name: '星期五' },
  { name: '星期六' },
  { name: '星期日' }
]

const getStyles = (name: string, personName: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

const RealTimeMonitorDrawer = () => {
  const theme = useTheme()
  const [startDateTime, setstartDateTime] = useState<Date>(new Date())
  const [endDateTime, setendDateTime] = useState<Date>(new Date())
  const [startTime, setstartTime] = useState<Date>(new Date())
  const [endTime, setendTime] = useState<Date>(new Date())
  const [days, setdays] = useState<string[]>(['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'])
  const [excludeDates, setexcludeDates] = useState<Array<string>>([])
  const [item, setitem] = useState<string>('0')

  const {
    routeAnalysisTitle = '',
    routeAnalysisContent,
    routeAnalysisHide,
    routeAnalysisSethide
  } = useContext(routeAnalysisDrawerContext)

  const handleClose = () => {
    routeAnalysisSethide(true)
  }

  const [open, setOpen] = React.useState(false)

  const handleSettingOpen = () => {
    setOpen(true)
  }

  const handleSettingClose = () => {
    setOpen(false)
  }

  const handleWeekChange = (event: SelectChangeEvent<typeof days>) => {
    const { target: { value } } = event
    setdays(typeof value === 'string' ? value.split(',') : value)
  }

  const handleItemChange = (event: SelectChangeEvent) => {
    // console.log(event.target.value as string)
    setitem(event.target.value as string)
  }

  const handleRouteQuery = () => {

  }

  return (
    <Drawer
      anchor='right'
      title={routeAnalysisTitle}
      open={!routeAnalysisHide}
      onClose={handleClose} >
      {routeAnalysisContent}

      <div className='route-query'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <div className='select-row'>
            <div className='select-cell'>
              <InputLabel id="start-date">起始日期</InputLabel>
              <MobileDateTimePicker
                value={startDateTime}
                onChange={(newValue) => {
                  if (newValue != null) {
                    setstartDateTime(newValue)
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>

            <div className='select-cell'>
              <InputLabel id="end-date">結束日期</InputLabel>
              <MobileDateTimePicker
                value={endDateTime}
                onChange={(newValue) => {
                  if (newValue != null) {
                    setendDateTime(newValue)
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>

            <div className='select-cell'>
              <InputLabel id="mobile-label">測項</InputLabel>
              <Select
                labelId="mobile-label"
                id="mobile-select"
                className="mobile-select"
                value={item}
                onChange={handleItemChange}
              >
                <MenuItem value={'0'}>PM 2.5 儀器平均</MenuItem>
                <MenuItem value={'1'}>PM 2.5 UART</MenuItem>
                <MenuItem value={'2'}>PM 2.5 I2C</MenuItem>
                <MenuItem value={'3'}>VOC</MenuItem>
              </Select>
            </div>

          </div>

          <div className='select-row'>
            <div className='select-cell-btn'>
              <Button
                className='setting-btn'
                variant="outlined"
                startIcon={<SettingsIcon />}
                onClick={handleSettingOpen}
              >
                進階篩選
              </Button>
            </div>

            <div className='select-cell-btn'>
              <Button
                className='setting-btn'
                variant="contained"
                onClick={handleRouteQuery}
                startIcon={<TrendingFlatIcon />}>
                查詢
              </Button>
            </div>
          </div>

        </LocalizationProvider>
      </div>

      <Dialog
        open={open}
        onClose={handleSettingClose}
        aria-labelledby="historyQuery-dialog-title"
        aria-describedby="historyQuery-dialog-description"
      >
        <DialogTitle id="historyQuery-dialog-title">
          {'時段篩選'}
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='setting-modal'>
              <div className='setting-row'>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={60}
                    label="起始時間"
                    value={startTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setstartTime(newValue)
                      }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={60}
                    label="結束時間"
                    value={endTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setendTime(newValue)
                      }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </div>
            </div>
          </LocalizationProvider>
        </DialogContent>

        <DialogTitle id="historyQuery-dialog-title">
          {'星期篩選'}
        </DialogTitle>
        <DialogContent>
          {/* <InputLabel id="demo-multiple-chip-label">Chip</InputLabel> */}
          <div className='setting-modal'>
            <div className='setting-row'>
              <div className='setting-cell'>
                <Select
                  id="demo-multiple-chip"
                  className="demo-multiple-chip"
                  multiple
                  value={days}
                  onChange={handleWeekChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {weekEnum.map((dayData) => (
                    <MenuItem
                      key={dayData.name}
                      value={dayData.name}
                      style={getStyles(dayData.name, days, theme)}
                    >
                      {dayData.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogTitle id="historyQuery-dialog-title">
          {'排除日期'}
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>

            <div className='setting-modal'>
              <div className='setting-row'>
                <div className='setting-cell-mulselect'>
                  <DatePicker
                    multiple
                    value={excludeDates}
                    onChange={(values: Array<any>) => {
                      const dateStringArray: Array<string> = []
                      values.forEach((value) => {
                        const dateString = `${value.year}-${value.month.number.toString().padStart(2, '0')}-${value.day.toString().padStart(2, '0')}`
                        dateStringArray.push(dateString)
                      })
                      setexcludeDates(dateStringArray)
                      console.log(excludeDates)
                    }}
                    plugins={[
                      <DatePanel key={null} />
                    ]}
                  />
                </div>
              </div>
            </div>

          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSettingClose} autoFocus>
            儲存
          </Button>
        </DialogActions>

      </Dialog>

    </Drawer>
  )
}

export default RealTimeMonitorDrawer
