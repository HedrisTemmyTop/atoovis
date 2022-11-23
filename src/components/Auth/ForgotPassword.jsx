import React from "react";
import '../../styles/auth/signin.css'

const SignIn = () => {
    return(
        <div className="sign">
           <div className=" weli">
           <h1>Forgot Your Password?</h1>
           <p>Enter your email address to get a reset link</p>
           </div>
            <form action="">
               <div className="signin">
               <div className="newi">
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                </div>
                <div className="remind">
                    <div style={{alignItems: 'right'}}>
                        <p >Remember Now?</p>
                    </div>
                </div>
               </div>
              

                <button className="btn1">Send Reset Link</button>
             
            </form>
           
        </div>
    )
}

export default SignIn