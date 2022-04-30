import React, { useEffect } from 'react'
import { fetchReposAction } from '../Redux/slices/reposSlice'
import Repository from './Repository'
import { useDispatch, useSelector } from 'react-redux'

const Repositories = () => (
  // const dispatch = useDispatch();
  <div>
    <Repository />
  </div>
)

export default Repositories
