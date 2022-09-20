/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { routeAnalysisDrawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
import './RouteAnalysisDrawer.scss'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TextField, InputLabel, MenuItem, Button, OutlinedInput, Box, Chip } from '@mui/material'
import { MobileDateTimePicker, TimePicker,LoadingButton } from '@mui/lab'
import SettingsIcon from '@mui/icons-material/Settings'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import SpatialQuery from '../../../widgets/react/SpatialQuery'
// import DialogContent from '@mui/material/DialogContent'
// import DialogTitle from '@mui/material/DialogTitle'
import DatePicker from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import dateFormat from 'dateformat'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import { arcGisContext } from '../../../lib/MapProvider'
import { RouteController } from '../../../lib/Controller'
import CircularProgress from '../../../jsdc-ui/components/CircularProgress'
// import classNames from 'classnames'
import { IRouteQueryParams } from '../../../lib/Controller/RouteController'
import { routeRendererContent,routeCORendererContent } from '../../../lib/Controller/RouteController/rendererContent'
import {routeAnalysisFields} from '../../../lib/Controller/RouteController/featureField'
import {routeTemplateContent} from '../../../lib/Controller/RouteController/templateContent'
/* ArcGIS API for javascript */
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer'
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
  { name: '星期一', code: 1 },
  { name: '星期二', code: 2 },
  { name: '星期三', code: 3 },
  { name: '星期四', code: 4 },
  { name: '星期五', code: 5 },
  { name: '星期六', code: 6 },
  { name: '星期日', code: 0 }
]

const getStyles = (name: string, personName: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

const RouteAnalysisDrawer = () => {
  const arcGis = useContext(arcGisContext)
  const theme = useTheme()
  const [startDateTime, setstartDateTime] = useState<Date>(new Date())
  const [endDateTime, setendDateTime] = useState<Date>(new Date())
  const [_extent, setExtent] = useState<number[] | undefined[]>([undefined, undefined, undefined, undefined])
  const [intervalStartTime, setIntervalStartTime] = useState<Date>()
  const [intervalEndTime, setIntervalEndTime] = useState<Date>()
  const [weekdays, setWeekdays] = useState<string[]>([])
  const [excludeDates, setexcludeDates] = useState<Array<string>>([])
  const [sensor, setsensor] = useState<string>('Pm2_5_UART')

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
  const [openTimeIT, setTimeITOpen] = React.useState(false)
  const [openWeek, setWeekOpen] = React.useState(false)
  const [openRMdays, setRmdaysOpen] = React.useState(false)
  const [queryStatusOpen, setqueryStatusOpen] = useState<boolean>(false)


  const handleSettingOpen = () => {
    setOpen(true)
  }
  const handleSettingClose = () => {
    setOpen(false)
  }
  const handleTimeITOpen = () => {
    setTimeITOpen(!openTimeIT)
  }
  const handleExtentChange = (value: number[]) => {
    setExtent(value)
  }
  const handleWeekOpen = () => {
    setWeekOpen(!openWeek)
  }
  const handleRMdaysOpen = () => {
    setRmdaysOpen(!openRMdays)
  }
    const handleAdvancedParams = () => {
    setIntervalStartTime(undefined)
    setIntervalEndTime(undefined)
    setWeekdays([])
    setexcludeDates([])
  }
  const handleWeekChange = (event: SelectChangeEvent<typeof weekdays>) => {
    const { target: { value } } = event
    setWeekdays(typeof value === 'string' ? value.split(',') : value)
  }

  const handleItemChange = (event: SelectChangeEvent) => {
    // console.log(event.target.value as string)
    setsensor(event.target.value as string)
    console.log(event.target.value)
    const routeController = arcGis.controllerManager?.getController('route') as RouteController
    if (routeController.routeLayer){
      console.log(routeController.routeLayer.url)
      switch (event.target.value){
        case 'Pm2_5_UART':
          const changePmMeanLayer = new GeoJSONLayer({
            title:'PM2.5 UART 路段統計',
            url: routeController.routeLayer.url,
            fields: routeAnalysisFields,
            popupTemplate: new PopupTemplate(routeTemplateContent),
            renderer: new ClassBreaksRenderer(routeRendererContent)
          })
          routeController.map.removeAll()
          routeController.map.add(changePmMeanLayer)
          break

        
        case 'CO':
          const changeRouteLayer = new GeoJSONLayer({
            title:'CO 路段統計',
            url: routeController.routeLayer.url,
            fields: routeAnalysisFields,
            popupTemplate: new PopupTemplate(routeTemplateContent),
            renderer: new ClassBreaksRenderer(routeCORendererContent)
          })
          // routeController.routeLayer.visible = false
          routeController.map.removeAll()
          routeController.map.add(changeRouteLayer)
          console.log(changeRouteLayer)
          break
      }
    } else {
      console.log('nonono')
    }
  }

  const handleRouteQuery = async () => {
    setqueryStatusOpen(true)
    const routeController = arcGis.controllerManager?.getController('route') as RouteController
    // console.log('GGG')
    if (_extent[0]===0){
      setqueryStatusOpen(false)
      alert('請設定空間查詢範圍~')
    }
    else{
    const data:IRouteQueryParams = {
      startDate: dateFormat(startDateTime, 'yyyy-mm-dd'),
      endDate: dateFormat(endDateTime, 'yyyy-mm-dd'),
      startTime: encodeURIComponent(dateFormat(startDateTime, 'HH:MM')),
      endTime: encodeURIComponent(dateFormat(endDateTime, 'HH:MM')),
      extent: (_extent[0] === 0) ? '' : _extent,
      interval_st: (intervalStartTime === undefined) ? '' : encodeURIComponent(dateFormat(intervalStartTime, 'HH:MM')),
      interval_et: (intervalEndTime === undefined) ? '' : encodeURIComponent(dateFormat(intervalEndTime, 'HH:MM')),
      weekdays: (weekdays[0] === undefined) ? '' : encodeURIComponent(weekdays.toString()),
      rmdays: (excludeDates[0] === undefined) ? '' : excludeDates.map(dates => "'" + dates +"'").toString()
    }
    console.log(data)
    const queryStatus  = await routeController.query(data)
    if (queryStatus !== undefined) {
      setqueryStatusOpen(false)
    }
    routeController.routeLayer?.when(() => {
      setqueryStatusOpen(false)
    })
    const startDate = dateFormat(startDateTime, 'yyyy-mm-dd')
    const endDate = dateFormat(endDateTime, 'yyyy-mm-dd')
    const startTime = dateFormat(startDateTime, 'HH:MM')
    const endTime = dateFormat(endDateTime, 'HH:MM')
    const myExtent = (_extent[0] === 0) ? null : _extent
    const intervalIT = (intervalStartTime === undefined) ? null : dateFormat(intervalStartTime, 'HH:MM')
    const intervalET = (intervalEndTime === undefined) ? null : dateFormat(intervalEndTime, 'HH:MM')
    const myweekdays = (weekdays[0] === undefined) ? null : weekdays
    const myexcludeDates = (excludeDates[0] === undefined) ? null : excludeDates.map(x => "'" + x +"'").toString()
    console.log(startDate)
    console.log(endDate)
    console.log(startTime)
    console.log(endTime)
    console.log(myExtent)
    console.log(intervalIT)
    console.log(intervalET)
    console.log(myweekdays)
    console.log(myexcludeDates)
    }
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
                value={sensor}
                onChange={handleItemChange}
              >
                <MenuItem value={'Pm2_5_AVG'}>PM 2.5 儀器平均</MenuItem>
                <MenuItem value={'Pm2_5_UART'}>PM 2.5 UART</MenuItem>
                <MenuItem value={'Pm2_5_I2C'}>PM 2.5 I2C</MenuItem>
                <MenuItem value={'Voc'}>VOC</MenuItem>
                <MenuItem value={'CO'}>CO</MenuItem>
              </Select>
            </div>

          </div>
          <div className='select-row'>
            <div className='select-cell'>
              <InputLabel id="spatial-query">空間範圍</InputLabel>
              <SpatialQuery onChange={handleExtentChange} _extent={_extent} sketchID='sketchRoute'></SpatialQuery>
            </div>
          </div>
          <div className='select-row-btn'>
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
            {/* <div
                className={
                  classNames({
                    'circular-progress-container': true
                  }, {
                    hide: !queryStatusOpen
                  })
                }>
                <CircularProgress radius={18.25}></CircularProgress>
                <p>查詢中</p>
            </div> */}
            <div className='select-cell-btn'>
              <LoadingButton
                className='setting-btn'
                loading={queryStatusOpen}
                loadingPosition="start"
                variant="contained"
                onClick={handleRouteQuery}
                startIcon={<TrendingFlatIcon />}>
                查詢
              </LoadingButton>
            </div>
          </div>

        </LocalizationProvider>
      </div>

      <Dialog
        className='aa'
        open={open}
        onClose={handleSettingClose}
        aria-labelledby="routeAnalysisQuery-dialog-title"
        aria-describedby="routeAnalysisQuery-dialog-description"
      >
        <ListItemButton onClick={handleTimeITOpen}>
          <ListItemText primary="時段篩選   (請重新設定起始時間與結束時間)" />
          {openTimeIT ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse in={openTimeIT} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='setting-modal'>
              <div className='setting-row'>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={30}
                    label="起始時間"
                    value={intervalStartTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setIntervalStartTime(newValue)
                      }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={30}
                    label="結束時間"
                    value={intervalEndTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setIntervalEndTime(newValue)
                      }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </div>
            </div>
            </LocalizationProvider>
          </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleWeekOpen}>
          <ListItemText primary="星期篩選" />
          {openWeek ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider/>
        <Collapse in={openWeek} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <div className='setting-modal'>
            <div className='setting-row'>
              <div className='setting-cell'>
                <Select
                  id="demo-multiple-chip"
                  className="demo-multiple-chip"
                  multiple
                  value={weekdays}
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
                      value={dayData.code}
                      style={getStyles(dayData.name, weekdays, theme)}
                    >
                      {dayData.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleRMdaysOpen}>
          <ListItemText primary="排除日期" />
          {openRMdays ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider/>
        <Collapse in={openRMdays} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
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
                      console.log(excludeDates.map(dates => "'" + dates +"'").toString())
                    }}
                    plugins={[
                  <DatePanel key={null} />
                    ]}
                />
                </div>
              </div>
            </div>

          </LocalizationProvider>
          </ListItemButton>
          </List>
        </Collapse>
        {/* <DialogTitle id="historyQuery-dialog-title">
          {'時段篩選'}
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='setting-modal'>
              <div className='setting-row'>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={30}
                    label="起始時間"
                    value={intervalStartTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setIntervalStartTime(newValue)
                      }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div className='setting-cell'>
                  <TimePicker
                    minutesStep={30}
                    label="結束時間"
                    value={intervalEndTime}
                    onChange={(newValue) => {
                      if (newValue != null) {
                        setIntervalEndTime(newValue)
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
          {/* <div className='setting-modal'>
            <div className='setting-row'>
              <div className='setting-cell'>
                <Select
                  id="demo-multiple-chip"
                  className="demo-multiple-chip"
                  multiple
                  value={weekdays}
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
                      style={getStyles(dayData.name, weekdays, theme)}
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
        <div className='ggg'>
          <DialogActions>
            <Button onClick={handleAdvancedParams} autoFocus>
              清除設定
            </Button>
            <Button onClick={handleSettingClose} autoFocus>
              儲存
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </Drawer>
  )
}

export default RouteAnalysisDrawer
