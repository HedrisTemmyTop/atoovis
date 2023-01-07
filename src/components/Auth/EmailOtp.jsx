import React, {useState} from "react";
import OTPInput from "react-otp-input";
const EmailOtp = ()=>{
    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
      setOTP(OTP);
    }
    return(
        <div className="container">
       
        <div className="">
            
            <div>
            <h1 style={{fontSize: 36}}>Check your email</h1>
           <p className="lor" style={{color: '#000'}}>We emailed the address hello@example.com. Kindly fill the boxes with the code contained in your email </p></div>
        
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

    <button type="submit" className="sub">Continue</button>
    <p className="resend">Cancel</p>
    
  </div>
  

           
        </div>
    </div>
    )
}

export default EmailOtp