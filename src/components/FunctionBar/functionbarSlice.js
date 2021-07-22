import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  functionSelected: 'Overview'
}

const functionbarSlice = createSlice({
  name: 'functionbar',
  initialState,
  reducers: {
    selectOverview: {
      reducer: (state, action) => {
        state.functionSelected = 'Overview'
      }
    },
    selectRepositories: {
      reducer: (state, action) => {
        state.functionSelected = 'Repositories'
      }
    }
  }
})

export const { selectOverview, selectRepositories } = functionbarSlice.actions

export default functionbarSlice.reducer