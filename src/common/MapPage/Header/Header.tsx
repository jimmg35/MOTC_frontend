import React, { useContext } from 'react'
import { Button } from '../../../jsdc-ui/components/Button'
import { useNavigate } from 'react-router-dom'
import {
  realTimeMonitorDrawerContext,
  historyQueryDrawerContext,
  routeAnalysisDrawerContext
} from '../../DrawerProvider'
import './Header.scss'
import { arcGisContext } from '../../../lib/MapProvider'

const Header = () => {
  const navigate = useNavigate()
  const {
    realTimeMonitorHide,
    realTimeMonitorSettitle,
    realTimeMonitorSethide,
    realTimeMonitorSetcontent
  } = useContext(realTimeMonitorDrawerContext)
  const {
    historyQueryHide,
    historyQuerySettitle,
    historyQuerySethide,
    historyQuerySetcontent
  } = useContext(historyQueryDrawerContext)
  const {
    routeAnalysisHide,
    routeAnalysisSettitle,
    routeAnalysisSethide,
    routeAnalysisSetcontent
  } = useContext(routeAnalysisDrawerContext)
  const arcGis = useContext(arcGisContext)

  const handleDrawerOpen = (title: string) => {
    if (title === '空品即時監測') {
      realTimeMonitorSettitle(title)
      realTimeMonitorSethide(!realTimeMonitorHide)
      historyQuerySethide(true)
      routeAnalysisSethide(true)
      realTimeMonitorSetcontent(undefined)
      // arcGis.realTimeController?.start()
      // arcGis.historyController?.stop()
      arcGis.controllerManager?.activate('realTime')
    } else if (title === '歷史查詢') {
      historyQuerySettitle(title)
      historyQuerySethide(!historyQueryHide)
      realTimeMonitorSethide(true)
      routeAnalysisSethide(true)
      historyQuerySetcontent(undefined)
      // arcGis.realTimeController?.stop()
      arcGis.controllerManager?.activate('history')
    } else {
      routeAnalysisSettitle(title)
      routeAnalysisSethide(!routeAnalysisHide)
      realTimeMonitorSethide(true)
      historyQuerySethide(true)
      routeAnalysisSetcontent(undefined)
      // arcGis.realTimeController?.stop()
    }
  }

  const handleDataCenterClick = () => {
    // arcGis.realTimeController?.stop()
    navigate('/dashboard')
  }

  return (
    <div className="MapPage-Header">
      <div className="MapPage-Header-title">移動空品物聯網</div>
      <div className="MapPage-Header-mainAction">
        <Button varient='flat' onClick={() => handleDrawerOpen('空品即時監測')}>即時監測</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('歷史查詢')}>歷史查詢</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('路段統計')}>路段統計</Button>
      </div>
      <div className="MapPage-Header-endAction">
        <Button
          onClick={() => handleDataCenterClick()}
          varient='flat'
        >感測器資料中心</Button>
      </div>
    </div>
  )
}

export default Header
