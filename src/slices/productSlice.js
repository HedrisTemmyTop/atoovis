import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adminAuthService from "../services/admin/adminAuthService"


const initialState = {
    data: "",
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: "",
}
export const getAllProducts = createAsyncThunk("Get All Product", async (data, thunkAPI) => {
    try {
        return await adminAuthService.fetchAllProducts()
    } catch (error) {
        console.log(error)
        const message =
            (error.response && error.response.data && error.response.data.message) || error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllProductSlice = createSlice({
    name: "Get All Vendor Products",
    initialState,
    reducers: {
        reset: (state) => {
            ;(state.isLoading = false), (state.isSuccess = false), (state.isError = false)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                ;(state.isLoading = false), (state.isSuccess = true), (state.isError = false)
                state.data = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                ;(state.isLoading = false), (state.isError = true), (state.data = null)
                state.message = action.payload
            })
    },
})

export default getAllProductSlice.reducer
