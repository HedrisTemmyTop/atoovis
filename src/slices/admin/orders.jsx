import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adminAuthService from "../../services/admin/adminAuthService"


const initialState = {
    data: "",
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: "",
}
export const getAllOrders = createAsyncThunk("Get All Orders", async (data, thunkAPI) => {
    try {
        return await adminAuthService.fetchAllOrders()
    } catch (error) {
        console.log(error)
        const message =
            (error.response && error.response.data && error.response.data.message) || error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllOrderSlice = createSlice({
    name: "Get All Vendor Products",
    initialState,
    reducers: {
        reset: (state) => {
            ;(state.isLoading = false), (state.isSuccess = false), (state.isError = false)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                ;(state.isLoading = false), (state.isSuccess = true), (state.isError = false)
                state.data = action.payload
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                ;(state.isLoading = false), (state.isError = true), (state.data = null)
                state.message = action.payload
            })
    },
})

export default getAllOrderSlice.reducer
