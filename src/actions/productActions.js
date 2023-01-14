import {
    createbusinessRequest,
    createbusinessSucess,
    failedStatus
  } from "../slices/createProductSlice";
  import { apiEndpointURL } from "../services/config";


export const productCreate = (businessDetails) => async (dispatch) => {
    const body = JSON.stringify(businessDetails);
    try {
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
        print("error")
         //dispatch(failedStatus(data.msg));
      }
      else{
        //dispatch(productCreateSucess(data))
    
      }
      // dispatch(loginSuccess(data.user));
    } catch (error) {
      print(error)
  
    }
  
  
};

