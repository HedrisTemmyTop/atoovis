import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import vendorReducer from '../slices/vendorSlice';

export const store = configureStore({
  reducer: {
    auth:userReducer,
    vendor:vendorReducer,
  },
})