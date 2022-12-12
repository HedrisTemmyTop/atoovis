import {
  signupRequest,
  signupSucess,
  logout,
  failedLogin,
  loginRequest,
  loginSuccess,
} from "../slices/userSlice";
import { apiEndpointURL } from "../services/config";
// import axios from 'axios';

export const login = (loginCredentials) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // const body = JSON.stringify(loginCredentials);

  try {
    dispatch(loginRequest());

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loginCredentials})
  };
    const response = await fetch(`${apiEndpointURL}/auth/login`, requestOptions);
    const data = await response.json();
    dispatch(loginSuccess(data));
    console.log("login - data:", data);
    //   dispatch(load_user());
  } catch (error) {
    dispatch(failedLogin(error));
    console.log(error);
  }
};
