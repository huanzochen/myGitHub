import { createSlice, 
  createAsyncThunk,
  createEntityAdapter,
  createSelector } from '@reduxjs/toolkit'

const reposAdapter = createEntityAdapter()

const initialState = reposAdapter.getInitialState({
  repoStatus: 'idle',
  page: 1,
  error: 'null'
})

export const fetchRepos = createAsyncThunk('repos/fetchRepos', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }

  const response = await fetch('https://api.github.com/users/huanzochen/repos?sort=pushed&per_page=100', {
    method: 'GET',
    headers: headersList
  })
  return await response.json()
})

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    moreData: {
      reducer(state, action) {
        state.page++
      }
    }
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

export const { moreData } = reposSlice.actions

export default reposSlice.reducer

export const {
  selectIds: selectRepoIds,
  selectById: selectRepoById,
  selectAll: selectAllRepos
} = reposAdapter.getSelectors(state => state.repos)

export const selectRepoIdsPart = createSelector(
  selectRepoIds,
  (state, pagination) => pagination,
  (repoIds, pagination) => {
    return repoIds.slice(0, pagination * 8)
  }
)