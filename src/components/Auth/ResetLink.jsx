import React from "react";
import '../../styles/auth/signin.css'

const ResetLink = () => {
    return(
        <div className="reset">
           <div className="wel">
           <h1 style={{textAlign: 'left'}}> Reset Link Sent!</h1>
           <p>We’ve sent an email to ferdnardjohn@email.com with a
link to reset your password. Not you? <span style={{fontWeight: 800}}>Change email address</span></p>

<div>
    <p>Didn’t get the mail? Kindly confirm your email address and <span style={{fontWeight: 800}}>Resend</span></p>
</div>
           </div>
           
         
        </div>
    )
}

export default ResetLink
    

