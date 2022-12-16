import {
  signupRequest,
  signupSucess,
  logout,
  failedLogin,
  loginRequest,
  loginSuccess,
} from "../slices/userSlice";
import { apiEndpointURL } from "../services/config";

export const login = (loginCredentials) => async (dispatch) => {
  const body = JSON.stringify(loginCredentials);
  try {
    dispatch(loginRequest());
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    };
    const response = await fetch(`${apiEndpointURL}/auth/login`, requestOptions);
    const data = await response.json();
    console.log(response.status, "code")
    console.log(data)
    if (response.status != 200){
      dispatch(failedLogin(data.msg));
    }
    else{
      dispatch(loginSuccess(data.user)) 
    }
    // dispatch(loginSuccess(data.user));
    localStorage.setItem("access", data.acessToken);
  } catch (error) {
    dispatch(failedLogin(error));

  }


};



export const signup = (loginCredentials) => async (dispatch) => {
  const body = JSON.stringify(loginCredentials);
  try {
    dispatch(signupRequest());
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    };
    const response = await fetch(`${apiEndpointURL}/auth/buyer/signup`, requestOptions);
    const data = await response.json();
    console.log(response.status, "code")
    console.log(data)
    if (response.status != 200){
      dispatch(failedLogin(data.msg));
    }
    else{
      dispatch(signupSucess(data.user))
      
    }
    // dispatch(loginSuccess(data.user));
    localStorage.setItem("access", data.acessToken);
  } catch (error) {
    dispatch(failedLogin(error));

  }


};