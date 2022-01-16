import React from 'react'
import classNames from 'classnames'
import './UserProfile.scss'

export interface IUserProfileParams {
  open: boolean
}

const UserProfile = (props: IUserProfileParams) => {
  // const [open] = useState<boolean>(props.open)

  return (
    <div className={
      classNames({
        'user-profile': true
      }, {
        hide: !props.open
      })
    }>
      <p>user profile</p>
    </div>
    // <div>1231sss23 {open}</div>
  )
}

export default UserProfile
