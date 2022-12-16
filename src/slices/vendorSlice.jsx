import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
    vendorId: null,
    isLoading: null,
    error:null,
    businessName:null
};

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
    createbusinessRequest: (state) => {
      state.isLoading = true
    },
    createbusinessSucess: (state, action) => {
      state.businessName = action.payload,
      state.isLoading = false
    },
    failedStatus:(state, action) => {
        state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { failedStatus, createbusinessSucess, createbusinessRequest } = vendorSlice.actions

export default vendorSlice.reducer