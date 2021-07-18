import { createSlice, 
  createAsyncThunk,
  createEntityAdapter,
  createSelector } from '@reduxjs/toolkit'

const reposAdapter = createEntityAdapter()

const initialState = reposAdapter.getInitialState({
  repoStatus: 'idle',
  page: 1,
  repoSort: 'updated',
  error: 'null'
})

export const fetchRepos = createAsyncThunk('repos/fetchRepos', async(repoSort) => {
  console.log(`repoSort = ${repoSort}`)
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
  switch (repoSort) {
  case 'Last Updated':
    const response = await fetch('https://api.github.com/users/huanzochen/repos?sort=updated&per_page=100', {
      method: 'GET',
      headers: headersList
    })
    return await response.json()
  case 'Name':
    const response2 = await fetch('https://api.github.com/users/huanzochen/repos?sort=full_name&per_page=100', {
      method: 'GET',
      headers: headersList
    })
    return await response2.json()
  }
})

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    moreData: {
      reducer(state, action) {
        state.page++
      }
    },
    changeSortType: {
      reducer(state, action) {
        state.repoSort = action.payload
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

export const { moreData, changeSortType } = reposSlice.actions

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