import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  cart: null,
  loading: false,
  error: null,
  totalPrice: 0,
};

// GET BUYER
const getCartAPI = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;
  const response = await axios.get("https://atoovis-be.herokuapp.com/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status >= 200 && response.status < 300) {
    return response.data.cart;
  }
};
export const getCartData = createAsyncThunk("get the cart", async (data) => {
  try {
    const userData = await getCartAPI();
    console.log(userData);
    return userData;
  } catch (err) {
    console.log(err);
    thunkAPI.rejectWithValue(err);
    throw new Error(err);
  }
});
export const getCart = createSlice({
  name: "get buyer",
  initialState,
  reducers: {
    calculateTotal: (state) => {
      state.totalPrice = state.cart
        .map(
          (cart) =>
            +cart.productId.variation[0].salePrice.replace(/[a-z]+/g, "") *
            cart.quantity
        )
        .reduce((total, current) => total + current, 0);
    },
    increaseTotalPrice: (state, action) => {
      console.log(action);
      state.totalPrice = state.totalPrice + action.payload;
    },
  },
  extraReducers: {
    [getCartData.pending]: (state) => {
      state.loading = true;
    },
    [getCartData.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    [getCartData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { calculateTotal, increaseTotalPrice } = getCart.actions;
export default getCart.reducer;
