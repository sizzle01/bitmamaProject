import React from 'react'
import './UserInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProfileAction } from '../../Redux/slices/reposSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})
const UserInfo = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('sizzle01')

  useEffect(() => {
    dispatch(fetchProfileAction(user))
  }, [dispatch])

  const store = useSelector((state) => state?.repos)
  console.log(store)
  const { loading, repoList, profile, error } = store
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error?.message}</h1>
      ) : (
        <div className="user">
          <img src={profile?.avatar_url} className="p-2 avatar" alt="User" />
          <div className="user_infoDetails">
            <div className="name">
              <h5>{profile?.name}</h5>
              <h3>{profile?.login}</h3>
            </div>
            <button
              className="profile-button"
              onclick="location.href='http://www.google.com'"
              type="button"
            >
              Edit Profile
            </button>
            <div className="user_infos">
              <div className="user_info">
                <div className="user_infoDetails">
                  <i className="fa fa-group">
                    <span className="item">
                      {profile?.followers} Follower .
                    </span>
                  </i>
                </div>
              </div>
              <div className="user_info">
                <div className="user_infoDetails">
                  <span className="item">{profile?.following} following .</span>
                </div>
              </div>
            </div>
            {/* location and email */}
          </div>
          <div className="user_social-media">
            <div className="user_media">
              <div className="user_mediaDetail">
                <i className="fa fa-map-marker pr-1">
                  <span className="item">{profile?.location} .</span>
                </i>
              </div>
            </div>
            <div className="user_media">
              <div className="user_mediaDetail">
                <i class="fa fa-brands fa-twitter">
                  <span className="item">{profile?.twitter_username} </span>
                </i>
              </div>
            </div>
            <div className="user_media">
              <div className="user_mediaDetail">
                <i className="fa fa-envelope pr-1">
                  <span className="item">{profile?.email} </span>
                </i>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="organizations">
            <p className="head">Organizations</p>
          </div>
        </div>
      )}
    </>
  )
}

export default UserInfo
