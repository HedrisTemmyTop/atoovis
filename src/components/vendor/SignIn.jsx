import React, {useState} from "react";
import '../../styles/vendor/signin.css'
import logo from '../../assets/images/Header/Atoovislogo.png'
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";



const VendorSignIn = () => {
    const [fswitch, setSwitch] = useState(true)
    const auth = useSelector((state) => state.auth); //get state
    const dispatch = useDispatch(); // call to action
    const history = useNavigate();

    const { user, isLoading, error, isAuthenticated } = auth;
    const { err, setErr } = useState(error);
    const { formData, handleInputChange } = useForm({
        password: "",
        email: "", 
      });

    const {  email, password }  = formData;

    const handleSwitch = () => {
        setSwitch(!fswitch)
    }
    const onLoginSubmit = (e) => {
        e.preventDefault();
        const formValues = {
          email: email,
          password: password,
          type:"vendor"
        };
        if (email.trim() === "" || password.trim() === "") {
          setErr("email or passsword cannot be empty");
        } else {
          dispatch(login(formValues, history));
        }
        console.log(formValues);
      };

    return(
        <React.Fragment>
          { fswitch ? <div className="container">
            <div className="lefto">
               <h1>Welcome Back</h1>

               <p className="lorem">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. 
                Enim sed tortor morbi ut suspendisse. </p>
                {error && <h4 style={{color:"red"}}>{error}!!</h4>}
                {err && <h4 style={{color:"red"}}>{err}!!</h4>}
            </div>
            <div className="right1">
                {/* <p>X</p> */}
                <img src={logo} alt="" />
                <h1>Login and <br /> Continue Selling</h1>

                <form action="">
                    <div className="forma">
                        <label htmlFor="">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="formap">
                        <label htmlFor="">Password</label>
                        <input
                        
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                    </div>
                    <div className="forgot">
                    <div><input type="checkbox" /> <span>Remember me</span></div>
                    <div>
                        <p>Forgot password?</p>
                    </div>
                </div>
                {isLoading == true ? <button className="log" >Loading...</button> :
                <button className="log" onClick={onLoginSubmit} >Login</button>}
                    <div className="account">
                <p className="dont">Don’t have an account ? <a onClick={handleSwitch}>Sign Up </a></p>
            </div>
                </form>
            </div>
             </div> : <SignUp/>}
        </React.Fragment>
    )
}

export default VendorSignIn;