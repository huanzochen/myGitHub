import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  functionSelected: 'Overview'
}

const functionbarSlice = createSlice({
  name: 'functionbar',
  initialState,
  reducers: {
    changeSelected: {
      reducer: (state, action) => {
        state.functionSelected = action.payload
      }
    }
  }
})

export const { changeSelected } = functionbarSlice.actions

export default functionbarSlice.reducer