import React,{useState} from "react";
import '../../styles/auth/signin.css'
import { login } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
    const [password, setPassword] = useState("")
    const [email, setemail] = useState("")
    const auth = useSelector((state) => state.auth); //get state
    const dispatch = useDispatch(); // call to action
    const { user, isLoading, error } = auth;


    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onLoginSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            email: email,
            password: password
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
           <h1> Welcome!</h1>
           <p>Sign-in to get access to great shopping
            deals from trusted vendors</p>
           </div>
            <form action="">
               <div className="signin">
               <div className="new">
                    <label htmlFor="">Email Address</label>
                    <input type="text" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="new2">
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </div>
               </div>
                <div className="forgot">
                    <div><input type="checkbox" /> <span>Remember me</span></div>
                    <div>
                        <p>Forgot password?</p>
                    </div>
                </div>

                <button onClick={onLoginSubmit}  className="btn1">Sign In</button>
                <div className="or">
                    <p>OR</p>
                </div>
                <button className="btn2">
                    <img src="" alt="" />
                    <p>Sign in with google</p>
                </button>
            </form>
            <div className="account">
                <p>Don’t have an account?<a href=""> Sign up</a></p>
            </div>
        </div>
    )
}

export default SignIn