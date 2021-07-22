import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  functionSelected: 'Overview'
}

const functionbarSlice = createSlice({
  name: 'functionBar',
  initialState,
  reducers: {
    selectRepositories: {
      reducer: (state, action) => {
        state.functionSelected = 'Repositories'
      }
    },
    selectOverview: {
      reducer: (state, action) => {
        state.functionSelected = 'Overview'
      }
    }
  }
})

export const { selectRepositories, selectOverview } = functionbarSlice.actions

export default functionbarSlice.reducer