import { configureStore } from '@reduxjs/toolkit'
import reposReducer from '../components/Repositories/reposSlice'

export const store = configureStore({
  reducer: {
    repos: reposReducer
  }
})
