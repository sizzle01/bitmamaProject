import React from 'react'
import './userPage.css'
import Navbar from '../tabs/Tabs'
import Repositories from '../repos/Repositories'
import Tabs from '../tabs/Tabs'
import UserInfo from '../userinfo/UserInfo'

const UserPage = () => {
  return (
    <div className="user-page">
      <Tabs />
      <div className="page-body">
        <UserInfo />
        <Repositories />
      </div>
    </div>
  )
}

export default UserPage
