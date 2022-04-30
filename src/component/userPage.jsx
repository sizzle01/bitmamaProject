import React from 'react'
import Navbar from './Navbar'
import Repositories from './repositories'
import Tabs from './Tabs'
import UserInfo from './UserInfo'

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <UserInfo />
      <Tabs />
      <Repositories />
    </div>
  )
}

export default UserPage
