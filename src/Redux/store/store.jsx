import { configureStore } from '@reduxjs/toolkit'
import reposReducer from '../slices/reposSlice'
const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
})

export default store
