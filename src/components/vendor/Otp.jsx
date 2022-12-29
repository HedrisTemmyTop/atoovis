import React, {useState} from "react";
import OTPInput from "react-otp-input";
import logo from "../../assets/images/Header/Atoovislogo.png";
import { Link } from "react-router-dom";
import '../../styles/auth/StyleVerify.css'
const Otp =()=>{
    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
      setOTP(OTP);
    }
    return(
        <div className="container">
            <div className="lefto">
               <h1>Welcome Back</h1>
               <p className="lorem">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. 
                Enim sed tortor morbi ut suspendisse. </p>
            </div>
            <div className="right1">
                {/* <p>X</p> */}
                <img src={logo} alt="" />
                <h1>Phone Number Verification</h1>
                <div>
                    <h4 style={{paddingBottom: 10}}>(+234) 707 654 7673  <span style={{color: '#4CC5D2'}}>Change</span></h4>

                    <p style={{color: '#000'}}>To enhance your account security, and verify your mobile number, We’ve sent 
                        a One Time Password (OTP) to your phone number. Please enter it below</p>
                </div>
            
 
     
      <div className="ootp">
        <div className="otp">
          <OTPInput
            onChange={handleChange}
            value={OTP}
            inputStyle="inputStyle"
            numInputs={4}
            separator={<span></span>}
          />
        </div>

        <button type="submit">Verify My Account</button>
        <p className="resend">Resend OTP</p>
        
      </div>
      

               
            </div>
        </div>
    )
}

export default Otp;