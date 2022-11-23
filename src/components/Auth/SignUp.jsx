import React from "react";
import '../../styles/auth/signin.css'

const SignIn = () => {
    return(
        <div className="sign">
           <div className="wel">
           <h1> Sign Up</h1>
           <p>Create an account and get upto 50% on
selected products</p>
           </div>
            <form action="">
               <div className="signin">
               <div className="new">
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                </div>
                <div className="new2">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" />
                </div>
                <div className="new3">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
               </div>
              

                <button className="btn1">Sign Up</button>
                <div className="or">
                    <p>OR</p>
                </div>
                <button className="btn2">
                    <img src="" alt="" />
                    <p>Sign in with google</p>
                </button>
            </form>
            <div className="account">
                <p>Don’t have an account?<a href="">Sign in</a></p>
            </div>
        </div>
    )
}

export default SignIn