import React from 'react'
import { useEffect, useState } from 'react'
import { fetchReposAction } from '../../Redux/slices/reposSlice'
import Repository from './Repository'
import { useDispatch, useSelector } from 'react-redux'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})
const Repositories = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('sizzle01')

  useEffect(() => {
    dispatch(fetchReposAction(user))
  }, [dispatch])

  const store = useSelector((state) => state?.repos)
  console.log(store)
  const { loading, reposList, profile, error } = store
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error?.message}</h1>
      ) : (
        <div className="repository-wrapper">
          <div className="repo-top">
            <div className="pinned">
              <p>Pinned</p>
            </div>
            <div className="pinned">
              <p>Customize your pins</p>
            </div>
          </div>
          <div className="repo-cards">
            {reposList?.map((repo) => (
              <Repository repo={repo} key={repo?.id} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default Repositories
