import {
    createbusinessRequest,
    createbusinessSucess,
    failedStatus
  } from "../slices/vendorSlice";
  import { apiEndpointURL } from "../services/config";


export const createBusiness = (businessDetails) => async (dispatch) => {
    const body = JSON.stringify(businessDetails);
    try {
    dispatch(createbusinessRequest());
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      };
      const response = await fetch(`${apiEndpointURL}/auth/buyer/business`, requestOptions);
      const data = await response.json();
      console.log(response.status, "code")
      console.log(data)
      if (response.status != 200){
         dispatch(failedLogin(data.msg));
      }
      else{
        dispatch(createbusinessSucess(data))
    
      }
      // dispatch(loginSuccess(data.user));
      localStorage.setItem("access", data.acessToken);
    } catch (error) {
      dispatch(failedLogin(error));
  
    }
  
  
};
