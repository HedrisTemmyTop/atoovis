import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import adminAuthService from "../services/admin/adminAuthService"

const initialState = {
    vendorId: "",
    isLoading: null,
    isError:null,
    product:null
};

export const checkCreatedProduct = createAsyncThunk("Create Products", async (data, thunkAPI) => {
  try {
      return await adminAuthService.createAProduct(data)
  } catch (error) {
      console.log(error)
      const message =
          (error.response && error.response.data && error.response.data.msg) || error.message
      return thunkAPI.rejectWithValue(message)
  }
})

export const createProduct = createSlice({
  name: "createProduct",
  initialState,
  reducers: {
      reset: (state) => {
          ;(state.isLoading = false), (state.isSuccess = false), (state.isError = false)
      },
  },
  extraReducers: (builder) => {
      builder
          .addCase(checkCreatedProduct.pending, (state) => {
              state.isLoading = true
              state.isError = false
          })
          .addCase(checkCreatedProduct.fulfilled, (state, action) => {
              ;(state.isLoading = false), (state.isSuccess = true), (state.isError = false)
              state.product = action.payload
          })
          .addCase(checkCreatedProduct.rejected, (state, action) => {
              ;(state.isLoading = false), (state.isError = action.payload), (state.data = null)
              state.message = action.payload
          })
  },
})
export default createProduct.reducer




