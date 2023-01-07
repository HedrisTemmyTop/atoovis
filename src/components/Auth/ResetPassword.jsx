import React from "react";
import '../../styles/auth/signin.css'

const ResetPassword = () => {
    return(
        <div className="reset">
           <div className="wel">
           <h1> Reset Your Password?</h1>
           <p>Enter your new password</p>
           </div>
            <form action="">
               <div className="signin">
               <div className="new newReset">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div className="new newSet">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" />
                </div>
               </div>
                <div className="pass">
                   <p>Password must contain a minimum of 8 characters, with  an uppercase letter,
                     a lowercase letter, a number and a special character</p>
                </div>

                <button className="btn1">Change Password</button>
               
            </form>
         
        </div>
    )
}

export default ResetPassword