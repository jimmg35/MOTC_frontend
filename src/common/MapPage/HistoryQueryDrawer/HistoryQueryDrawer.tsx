/* eslint-disable */
import React, { useContext, useState } from 'react'
// import { Theme, useTheme } from '@mui/material/styles'
import { historyQueryDrawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
import './HistoryQueryDrawer.scss'
// import { MobileDateTimePicker, TimePicker } from '@mui/lab'
// import { TextField, InputLabel, MenuItem, Button, OutlinedInput, Box, Chip } from '@mui/material'
import { MobileDateTimePicker } from '@mui/lab'
import { TextField, InputLabel, MenuItem, Button } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import SettingsIcon from '@mui/icons-material/Settings'
// import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
// import DatePicker from 'react-multi-date-picker'
// import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import Divider from '@mui/material/Divider'
import { arcGisContext } from '../../../lib/MapProvider'
import { HistoryController } from '../../../lib/Controller'
import SpatialQuery from '../../../widgets/react/SpatialQuery'
import CircularProgress from '../../../jsdc-ui/components/CircularProgress'
import classNames from 'classnames'

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// }

// const weekEnum = [
//   { name: '星期一' },
//   { name: '星期二' },
//   { name: '星期三' },
//   { name: '星期四' },
//   { name: '星期五' },
//   { name: '星期六' },
//   { name: '星期日' }
// ]

// const getStyles = (name: string, personName: readonly string[], theme: Theme) => {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   }
// }

const HistoryQueryDrawer = () => {
  // const theme = useTheme()
  const arcGis = useContext(arcGisContext)
  const [startDateTime, setstartDateTime] = useState<Date>(new Date())
  const [endDateTime, setendDateTime] = useState<Date>(new Date())
  // const [startTime, setstartTime] = useState<Date>(new Date())
  // const [endTime, setendTime] = useState<Date>(new Date())
  // const [days, setdays] = useState<string[]>(['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'])
  // const [excludeDates, setexcludeDates] = useState<Array<string>>([])
  const [deviceId, setdeviceId] = useState<string | null>(null)
  const [mobileSelect, setmobileSelect] = useState<string>('Pm2_5_AVG')
  const [_extent, set_extent] = useState<number[] | undefined[]>([undefined, undefined, undefined, undefined])
  const [queryStatusOpen, setqueryStatusOpen] = useState<boolean>(false)

  const {
    historyQueryTitle = '',
    historyQueryContent,
    historyQueryHide,
    historyQuerySethide
  } = useContext(historyQueryDrawerContext)

  const handleClose = () => {
    historyQuerySethide(true)
  }

  const handleMobileSelect = (event: SelectChangeEvent) => {
    setmobileSelect(event.target.value as string)
    const historyController = arcGis.controllerManager?.getController('history') as HistoryController
    historyController.changeSymbol(event.target.value as string)
  }

  const [open, setOpen] = React.useState(false)

  // const handleWeekChange = (event: SelectChangeEvent<typeof days>) => {
  //   const { target: { value } } = event
  //   setdays(typeof value === 'string' ? value.split(',') : value)
  // }

  const handleMobileIdSelect = (event: SelectChangeEvent) => {
    setdeviceId(event.target.value as string)
  }

  const handleQueryMobile = async () => {
    setqueryStatusOpen(true)
    const historyController = arcGis.controllerManager?.getController('history') as HistoryController
    const queryStatus = await historyController.query({
      startDateTime: new Date(startDateTime).getTime(),
      endDateTime: new Date(endDateTime).getTime(),
      DeviceList: deviceId,
      _extent: _extent as number[]
    })
    if (queryStatus !== undefined) {
      setqueryStatusOpen(false)
    }
    historyController.mobileLayer?.when(() => {
      setqueryStatusOpen(false)
    })

    // console.log(endDateTime)
    // console.log(startTime)
    // console.log(deviceId)
    // console.log(endTime)
    // console.log(days)
    // console.log(excludeDates)
  }

  const handleExtentChange = (value: number[]) => {
    set_extent(value)
  }

  return (
    <Drawer
      anchor='right'
      title={historyQueryTitle}
      open={!historyQueryHide}
      onClose={handleClose}>
      {historyQueryContent}

      <div className="history-query">
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <div className='select-row time-select'>
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
          </div>

          <div className='select-row'>
            <div className='select-cell'>
              <InputLabel id="spatial-query">空間範圍</InputLabel>
              <SpatialQuery onChange={handleExtentChange} _extent={_extent} sketchID='sketchhistory'></SpatialQuery>
            </div>
          </div>

          <div className='select-row-btn'>
            <div className='select-cell-btn'>
              <Button
                className='setting-btn'
                variant="outlined"
                startIcon={<SettingsIcon />}
                onClick={() => { setOpen(true) }}
              >
                進階篩選
              </Button>
            </div>

            {/* <div className='select-cell-btn'>
              <Button
                className='setting-btn'
                variant="contained"
                startIcon={<GpsFixedIcon />}>
                查詢固定點
              </Button>
            </div> */}

            <div className='select-cell-btn query-set'>

              <div
                className={
                  classNames({
                    'circular-progress-container': true
                  }, {
                    hide: !queryStatusOpen
                  })
                }>
                <CircularProgress radius={18.25}></CircularProgress>
                <p>查詢中</p>
              </div>

              <Button
                className='setting-btn-fill'
                variant="contained"
                onClick={handleQueryMobile}
                startIcon={<TrendingFlatIcon />}>
                查詢
              </Button>
            </div>
          </div>

          <Divider className='divider-dark' variant="middle" />

          <div className='select-row'>
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

            {/* <div className='select-cell'>
              <InputLabel id="fixed-label">固定點顯示</InputLabel>
              <Select
                labelId="fixed-label"
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
            </div> */}
          </div>

          {/* <Dialog
            open={historyModalOpen}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleHistoryModalClose}
            aria-describedby="alert-dialog-slide-description"
          >
          </Dialog> */}

        </LocalizationProvider>
      </div>

      <Dialog
        open={open}
        onClose={() => { setOpen(false) }}
        aria-labelledby="historyQuery-dialog-title"
        aria-describedby="historyQuery-dialog-description"
      >
        {/* <DialogTitle id="historyQuery-dialog-title">
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
        </DialogContent> */}

        <DialogTitle id="historyQuery-dialog-title">
          {'感測器篩選'}
        </DialogTitle>
        <DialogContent>
          <div className='setting-modal'>
            <div className='setting-row'>
              <div className='setting-cell'>

                <InputLabel id="mobile-id-label">裝置ID</InputLabel>
                <Select
                  labelId="mobile-id-label"
                  id="mobile-id-select"
                  className="mobile-id-select"
                  value={deviceId ? deviceId : ''}
                  onChange={handleMobileIdSelect}
                >
                  <MenuItem value={0}>ID 0</MenuItem>
                  <MenuItem value={1}>ID 1</MenuItem>
                  <MenuItem value={2}>ID 2</MenuItem>
                  <MenuItem value={3}>ID 3</MenuItem>
                </Select>

              </div>
            </div>
          </div>
        </DialogContent>

        {/* <DialogTitle id="historyQuery-dialog-title">
          {'濃度篩選'}
        </DialogTitle>
        <DialogContent>
        </DialogContent> */}

        <DialogActions>
          <Button onClick={() => { setOpen(false) }} autoFocus>
            儲存
          </Button>
        </DialogActions>

      </Dialog>

    </Drawer>
  )
}

export default HistoryQueryDrawer
