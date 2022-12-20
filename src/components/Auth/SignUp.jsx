import React from "react";
import '../../styles/auth/signin.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SignIn = () => {
    const auth = useSelector((state) => state.auth); //get state
    const dispatch = useDispatch(); // call to action
    const { user, isLoading, error } = auth;
    const [fullname, setFullname] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setnumber] = useState("")

    

    const handlePasswordChange = (e) => {
        setFullname(e.target.value)
    }

    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }

    const handleFullnameChange = (e) => {
        setFullname(e.target.value)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNumberChange = (e) => {
        setnumber(e.target.value)
    }
    
    
    const onSignUpSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            email: email,
            password: password,
            fullname: fullname,
            number: number,
        }
        if (email.trim() === "" || password.trim() === "") {
          setErr("email or passsword cannot be empty");
        } else {
          dispatch(login(formValues));
        }
        console.log(formValues);
      };
    console.log("auth", user, error, isLoading);

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
                <p>Already have an account?<a href="">Sign in</a></p> 
            </div>
        </div>
    )
}

export default SignIn