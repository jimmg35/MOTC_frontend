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
// import Dialog from '@mui/material/Dialog'
// import DialogActions from '@mui/material/DialogActions'
// import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'
// import Slide from '@mui/material/Slide'
// import { TransitionProps } from '@mui/material/transitions'

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & { children: React.ReactElement<any, any> },
//   ref: React.Ref<unknown>) { return <Slide direction="up" ref={ref} {...props} /> }
// )

const HistoryQuery = () => {
  // const [historyModalOpen, sethistoryModalOpen] = useState<boolean>(false)
  // const [value, setValue] = React.useState<Date | null>(new Date())
  // useEffect(() => {
  //   console.log('AAAAAAAAAAAAAAAAAAAAAAAAaa')
  // }, [])
  const handleMobileSelect = (event: SelectChangeEvent) => {
    console.log(event.target.value as string)
  }

  const handleFixedSelect = (event: SelectChangeEvent) => {
    console.log(event.target.value as string)
  }

  // const handleHistoryModalClose = () => {
  //   sethistoryModalOpen(false)
  // }

  const handleHistoryModalOpen = () => {
    // console.log(historyModalOpen)
    // sethistoryModalOpen(true)
    console.log('AAAAAAAAAAAAa')
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
              startIcon={<SettingsIcon />}
              onClick={handleHistoryModalOpen}
            >
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
  )
}

export default HistoryQuery
