import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState({
  userStatus: 'idle',
  error: 'null'
})

export const fetchUser = createAsyncThunk('user/fetchUser', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
       
  const response = await fetch('https://api.github.com/users/huanzochen', {
    methods: 'GET',
    headers: headersList
  })
  return await response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducer: {
    [fetchUser.pending]: (state, action) => {
      state.userStatus = 'loading'
    },
    [fetchUser.fulfiiled]: (state, action) => {
      state.userStatus = 'succeeded'
      userAdapter.upsertMany(state, action.payload)
    },
    [fetchUser.rejected]: (state, action) => {
      state.userStatus = 'failed',
      state.error = action.error.message
    }
  }
})

export const {} = userSlice.actions

export default userSlice.reducer

// export const {

// }