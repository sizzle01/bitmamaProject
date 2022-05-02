import React from 'react'
import './Tabs.css'
import { useEffect, useState } from 'react'
import {
  fetchReposAction,
  fetchProfileAction,
} from '../../Redux/slices/reposSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const Tabs = () => {
  const [user, setUser] = useState('sizzle01')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfileAction(user))
    // dispatch(fetchReposAction(user))
  }, [user, dispatch])
  console.log(user)

  const repos = useSelector((state) => state?.repos)
  const { loading, profileLoading, reposList, profile, error } = repos
  console.log(user)

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error?.message}</h1>
      ) : (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mb-0"
              href="https://github.com/sizzle01"
            >
              <i class="fa fa-columns nav-link mb-0"></i>
              Overview
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link mb-0 active">
              Repositories {profile?.public_repo}
            </p>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mb-0"
              href="https://github.com/sizzle01?tab=projects&type=beta"
            >
              <i class="fa fa-window-maximize nav-link mb-0"></i>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mb-0"
              href="https://github.com/sizzle01?tab=packages"
            >
              Packages
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mb-0"
              href="https://github.com/sizzle01?tab=stars"
            >
              <i class="fa fa-star-o nav-link mb-0"></i>
              stars
            </a>
          </li>
        </ul>
      )}
    </>
  )
}

export default Tabs
