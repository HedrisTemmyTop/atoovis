import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// GET BUYER
const getUserAPI = async () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");
  if (!userId) return;
  const response = await axios.get(
    "https://atoovis-be.herokuapp.com/users/" + userId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
};
export const getUserData = createAsyncThunk("login the buyer", async (data) => {
  try {
    const userData = await getUserAPI();
    console.log(userData);
    return userData;
  } catch (err) {
    console.log(err);
    thunkAPI.rejectWithValue(err);
    throw new Error(err);
  }
});
export const getUser = createSlice({
  name: "get buyer",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default getUser.reducer;
