import React, { useContext } from 'react'
import { drawerContext } from '../../DrawerProvider'
import Drawer from '../../../jsdc-ui/components/Drawer'
const LeftDrawer = () => {
  const { title = '', content, hide, sethide } = useContext(drawerContext)
  const handleClose = () => {
    sethide(true)
  }
  return (
    <Drawer
      anchor='bottom'
      title={title}
      open={!hide}
      onClose={handleClose}>
      {content}
    </Drawer>
  )
}

export default LeftDrawer
