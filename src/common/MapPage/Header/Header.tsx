import React, { useContext } from 'react'
import { Button } from '../../../jsdc-ui/components/Button'
import {
  realTimeMonitorDrawerContext,
  historyQueryDrawerContext,
  routeAnalysisDrawerContext
} from '../../DrawerProvider'
import './Header.scss'

const Header = () => {
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

  const handleDrawerOpen = (title: string) => {
    if (title === '空品即時監測') {
      realTimeMonitorSettitle(title)
      realTimeMonitorSethide(!realTimeMonitorHide)
      historyQuerySethide(true)
      routeAnalysisSethide(true)
      realTimeMonitorSetcontent(undefined)
    } else if (title === '歷史查詢') {
      historyQuerySettitle(title)
      historyQuerySethide(!historyQueryHide)
      realTimeMonitorSethide(true)
      routeAnalysisSethide(true)
      historyQuerySetcontent(undefined)
    } else {
      routeAnalysisSettitle(title)
      routeAnalysisSethide(!routeAnalysisHide)
      realTimeMonitorSethide(true)
      historyQuerySethide(true)
      routeAnalysisSetcontent(undefined)
    }
  }

  return (
    <div className="MapPage-Header">
      <div className="MapPage-Header-title">環境物聯網</div>
      <div className="MapPage-Header-mainAction">
        <Button varient='flat' onClick={() => handleDrawerOpen('空品即時監測')}>空品即時監測</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('歷史查詢')}>歷史查詢</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('路段統計')}>路段統計</Button>
      </div>
      {/* <div className="MapPage-Header-endAction">
        <Button varient='flat'>action1</Button>
      </div> */}
    </div>
  )
}

export default Header
