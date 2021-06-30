import { createSlice, 
  createAsyncThunk,
  createEntityAdapter } from '@reduxjs/toolkit'

const reposAdapter = createEntityAdapter()

const initialState = reposAdapter.getInitialState({
  repoStatus: 'idle',
  error: 'null'
})

export const fetchRepos = createAsyncThunk('github/fetchRepos', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }

  const response = await fetch('https://api.github.com/users/huanzochen/repos?sort=pushed', {
    method: 'GET',
    headers: headersList
  })
  return await response.json()
})

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchRepos.pending]: (state, action) => {
      state.repoStatus = 'loading'
    },
    [fetchRepos.fulfilled]: (state, action) => {
      state.repoStatus = 'succeeded'
      reposAdapter.upsertMany(state, action.payload)
    },
    [fetchRepos.rejected]: (state, action) => {
      state.repoStatus = 'failed'
      state.error = action.error.message
    }
  }
})

export const { } = reposSlice.actions

export default reposSlice.reducer

export const {
  selectIds: selectRepoIds,
  selectById: selectRepoById
} = reposAdapter.getSelectors(state => state.repos)