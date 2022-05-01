import React from 'react'
import Navbar from './navbar/Navbar'
import Repositories from './repos/Repositories'
import Tabs from './tabs/Tabs'
import UserInfo from './userinfo/UserInfo'

const UserPage = () => {
  return (
    <div style={{ width: '80%' }}>
      <Tabs />
      <div style={{ display: 'flex' }}>
        <UserInfo />
        <Repositories />
      </div>
    </div>
  )
}

export default UserPage
