import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: localStorage.getItem("user"),
  error:null,
  isLoading: null,
  registered:null
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.isLoading = true
    },
    signupSucess: (state) => {
      state.isAuthenticated = false,
      state.isLoading = false
    },
    loginRequest: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true,
      state.user = action.payload,
      state.isLoading = false
    },
    failedLogin:(state, action) => {
        state.isAuthenticated = false,
        state.user =  null,
        state.isLoading = false,
        state.error = action.payload
    },
    logout:(state) =>{
      state.isAuthenticated = false,
      state.user =  null,
      state.isLoading = false

    }
  },
})

// Action creators are generated for each case reducer function
export const { signupRequest, signupSucess, logout, failedLogin, loginRequest, loginSuccess } = userSlice.actions

export default userSlice.reducer