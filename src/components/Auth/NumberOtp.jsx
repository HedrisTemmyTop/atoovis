import React, {useState} from "react";
import OTPInput from "react-otp-input";
const NumberOtp = ()=>{
    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
      setOTP(OTP);
    }
    return(
        <div className="container">
       
        <div className="">
            
            <div>
            <h1 style={{fontSize: 36}}>Phone Number Verification</h1>
           <p className="lorem" style={{color: '#000'}}>Enter the verification code sent to 080********78 </p></div>
        
  <div className="sub">
    <div className="otp">
      <OTPInput
        onChange={handleChange}
        value={OTP}
        inputStyle="inputStyle"
        numInputs={4}
        separator={<span></span>}
      />
    </div>
    <div>
        <h5>Did not recieve a code? <span>Resend Code</span></h5>
    </div>

    <button type="submit" className="sub">Verify</button>
    <p className="resend">Cancel</p>
    
  </div>
  

           
        </div>
    </div>
    )
}

export default NumberOtp