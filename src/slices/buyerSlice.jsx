import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  registered: false,
  isLoading: false,
  //   accesssToken: localStorage.getItem("token"),
  authenticated: false,
  user: null,
  error: null,
};

// get the current time in milliseconds
const deleteAccessToken = () => {
  setTimeout(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.setItem("authenticated", false);
  }, 100000000);
};
// REGISTER WITH GOOGLE
const createBuyerWithGoogle = async (data) => {
  const response = await axios.get(
    "https://atoovis-be.herokuapp.com/auth/google"
  );

  console.log(response.data);
  if (response.ok) return response.data;
};
export const registerWithGoogle = createAsyncThunk(
  "sign in with google",
  async () => {
    try {
      return await createBuyerWithGoogle();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

/// REGISTER BUYER
export const registerBuyer = createAsyncThunk(
  "create a new buyer",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://atoovis-be.herokuapp.com/auth/user/signup",
        data
      );
      if (response.status >= 200 && response.status < 300) {
        alert("you have successfully created your account, check your mail");
        return response.data;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
      throw new Error(error);
    }
  }
);
// LOGIN BUYER
const loginBuyerAPI = async (data) => {
  const response = await axios.post(
    "https://atoovis-be.herokuapp.com/auth/login",
    data
  );
  if (response.status >= 200 && response.status < 300) {
    alert("you have successfully logged in your account");
    return response.data;
  }
};
export const loginBuyer = createAsyncThunk("login the buyer", async (data) => {
  try {
    const userData = await loginBuyerAPI(data);

    return userData;
  } catch (err) {
    console.log(err);
    thunkAPI.rejectWithValue(err);
  }
});
export const buyerSlice = createSlice({
  name: "buyers",
  initialState,
  reducers: {
    resetLoginState: (state) => {
      state.isLoading = false;
      state.authenticated = false;
      state.user = null;
      state.error = null;
      state.otp = null;
    },
    resetRegisterState: (state) => {
      state.registered = false;
      state.isLoading = false;
      state.authenticated = false;
      state.user = null;
      state.error = null;
      state.otp = null;
    },
  },
  extraReducers: {
    [registerBuyer.pending]: (state) => {
      state.isLoading = true;
    },
    [registerBuyer.fulfilled]: (state, action) => {
      console.log(action);
      localStorage.setItem("accessToken", action.payload.acessToken);
      localStorage.setItem("userId", action.payload.user._id);
      localStorage.setItem("registered", true);
      localStorage.setItem("authenticated", true);

      state.registered = true;
      state.isLoading = false;
      window.location.reload();
      deleteAccessToken();
    },
    [registerBuyer.rejected]: (state, action) => {
      console.log(state, action);
      state.isLoading = false;
      state.error = action.payload;
    },
    [loginBuyer.pending]: (state) => {
      state.isLoading = true;
    },
    [loginBuyer.fulfilled]: (state, action) => {
      localStorage.setItem("accessToken", action.payload.acessToken);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("authenticated", true);
      window.location.reload();
      deleteAccessToken();
      // localStorage.setItem("accessToken", action.payload.accessToken);
      console.log(action);
      // localStorage.setItem("userId", action.payload.userId)
      state.isLoading = false;
      state.user = action.payload;
    },
    [loginBuyer.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     (registerBuyer.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(registerBuyer.fulfilled, (state, action) => {
  //       // localStorage.setItem("accessToken", action.payload.accessToken);
  //       // localStorage.setItem("userId", payload.userId)
  //       console.log(action);
  //       state.registered = true;
  //       state.isLoading = false;
  //     })
  //     .addCase(registerBuyer.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(loginBuyer.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(loginBuyer.fulfilled, (state, action) => {
  //       // localStorage.setItem("accessToken", action.payload.accessToken);
  //       console.log(action);
  //       // localStorage.setItem("userId", action.payload.userId)
  //       state.isLoading = false;
  //       state.user = action.payload;
  //     })
  //     .addCase(loginBuyer.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })

  // },
});
export const { resetRegisterState, resetLoginState } = buyerSlice.actions;
export default buyerSlice.reducer;

// Action creators are generated for each case reducer function
// export const {
//   loginFail,
//   loginStart,
//   signupFail,
//   signupStart,
//   signupSucces,
//   loginSuccess,
// } = buyerSlice.actions;

// signupStart: (state) => {
//   state.isLoading = true;
// },
// signupSucces: (state, action) => {
//   state.registered = true;
//   state.isLoading = false;
// },
// signupFail: (state, action) => {
//   state.error = action.error;
//   state.isLoading = false;
// },
// loginStart: (state) => {
//   state.isLoading = true;
// },
// loginSuccess: (state, action) => {
//   state.buyerId = action.Id;
//   state.isLoading = false;
// },
// loginFail: (state, action) => {
//   state.isLoading = false;
//   state.error = action.error;
// },
