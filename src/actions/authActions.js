import {
  signupRequest,
  signupSucess,
  logout,
  failedLogin,
  loginRequest,
  loginSuccess,
} from "../slices/userSlice";
import { apiEndpointURL } from "../services/config";

export const login = (loginCredentials, history) => async (dispatch) => {
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
      if(loginCredentials.type == 'vendor'){
        history(`/sidebar`);
      }else{
        history(`/`);
      }
    }
    // dispatch(loginSuccess(data.user));
    localStorage.setItem("access", data.acessToken);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem("user", data.user);

  } catch (error) {
    dispatch(failedLogin(error));

  }


};
export const signup = (signupCredentials) => async (dispatch) => {
  const body = JSON.stringify(signupCredentials);
  try {
    dispatch(signupRequest());
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    };
    let response = null
    if (signupCredentials.type === 'vendor') {
      response = await fetch(`${apiEndpointURL}/auth/vendor/signup`, requestOptions);
    }
    else{
      response = await fetch(`${apiEndpointURL}/auth/buyer/signup`, requestOptions);
    }


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