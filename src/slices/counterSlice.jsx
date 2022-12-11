import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions



// selectors
export const selectValue = initialState.value;

export default counterSlice.reducer