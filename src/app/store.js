import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/Profile/userSlice'
import reposReducer from '../components/Repositories/reposSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer
  }
})
