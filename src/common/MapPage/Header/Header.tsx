import React, { useContext } from 'react'
import { Button } from '../../../jsdc-ui/components/Button'
import { drawerContext } from '../../DrawerProvider'
import './Header.scss'
import { RealTimeMonitor, HistoryQuery, RouteAnalysis } from '../QuerySet'

const Header = () => {
  const { hide, settitle, sethide, setcontent } = useContext(drawerContext)
  const handleDrawerOpen = (title: string, element: any) => {
    settitle(title)
    sethide(!hide)
    setcontent(element)
  }
  return (
    <div className="MapPage-Header">
      <div className="MapPage-Header-title">環境物聯網</div>
      <div className="MapPage-Header-mainAction">
        <Button varient='flat' onClick={() => handleDrawerOpen('空品即時監測', RealTimeMonitor)}>空品即時監測</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('歷史查詢', HistoryQuery)}>歷史查詢</Button>
        <Button varient='flat' onClick={() => handleDrawerOpen('路段統計', RouteAnalysis)}>路段統計</Button>
      </div>
      {/* <div className="MapPage-Header-endAction">
        <Button varient='flat'>action1</Button>
      </div> */}
    </div>
  )
}

export default Header
