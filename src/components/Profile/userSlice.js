import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  userDataStatus: 'idle',
  userStarredStatus: 'idle',
  userOrganizationStatus: 'idle',
  error: 'null',
  data: 'null',
  starred: 'null',
  organization: []
}

export const fetchUserData = createAsyncThunk('user/fetchUserData', async() => {
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

export const fetchUserStarred = createAsyncThunk('user/fetchUserStarred', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
  let page = 1
  const numPerPage = 100
  let result = [] 
  do {
    const response = await fetch(`https://api.github.com/users/huanzochen/starred?per_page=${numPerPage}&page=${page}`, {
      methods: 'GET',
      herader: headersList
    }) 
    result = result.concat(await response.json())
    page++
  } while (result.length - numPerPage * (page - 1) === 0)
  return result
})

export const fetchUserOrganization = createAsyncThunk('user/fetchUserOrganization', async() => {
  let headersList = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
  }
  const response = await fetch('https://api.github.com/users/huanzochen/orgs', {
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
  extraReducers: {
    [fetchUserData.pending]: (state, action) => {
      state.userDataStatus = 'loading'
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.userDataStatus = 'succeeded'
      state.data = action.payload
    },
    [fetchUserData.rejected]: (state, action) => {
      state.userDataStatus = 'failed',
      state.error = action.error.message
    },
    [fetchUserStarred.pending]: (state, action) => {
      state.userStarredStatus = 'loading'
    },
    [fetchUserStarred.fulfilled]: (state, action) => {
      state.userStarredStatus = 'succeeded'
      state.starred = action.payload
    },
    [fetchUserStarred.rejected]: (state, action) => {
      state.userStarredStatus = 'failed',
      state.error = action.error.message
    },
    [fetchUserOrganization.pending]: (state, action) => {
      state.userOrganizationStatus = 'loading'
    },
    [fetchUserOrganization.fulfilled]: (state, action) => {
      state.userOrganizationStatus = 'succeeded'
      state.organization = action.payload
    },
    [fetchUserOrganization.rejected]: (state, action) => {
      state.userOrganizationStatus = 'failed',
      state.error = action.error.message
    },
  }
})

export const {} = userSlice.actions

export default userSlice.reducer

// export const {

// }