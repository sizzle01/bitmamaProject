import React from 'react'
import './UserInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProfileAction } from '../Redux/slices/reposSlice'

const UserInfo = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfileAction('sizzle01'))
  }, [dispatch])

  return (
    <div className="user-infos">
      <img src="" className="p-2 avatar" width="130" height="130" alt="User" />
      <div className="user_infoDetails">
        <h5>userName</h5>
        <div className="user_infos">
          <div className="user_infos">
            <div className="user_infoDetail">
              <i className="fa fa-map-marker pr-1">
                <span>Location .</span>
              </i>
            </div>
          </div>
          <div className="user_infos">
            <div className="user_infoDetail">
              <i className="fa fa-map-marker pr-1">
                <span>Location .</span>
              </i>
            </div>
          </div>
          <div className="user_infos">
            <div className="user_infoDetail">
              <i className="fa fa-map-marker pr-1">
                <span>Location .</span>
              </i>
            </div>
          </div>
          <div className="user_infos">
            <div className="user_infoDetail">
              <i className="fa fa-map-marker pr-1">
                <span>Location .</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
