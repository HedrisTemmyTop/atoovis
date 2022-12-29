import React from "react";
import '../../styles/vendor/signin.css'
import logo from '../../assets/images/Header/Atoovislogo.png'
import { Link } from "react-router-dom";
const VendorSignIn = () => {
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
                <h1>Login and <br /> Continue Selling</h1>

                <form action="">
                    <div className="forma">
                        <label htmlFor="">Email Address</label>
                        <input type="email" />
                    </div>
                    <div className="formap">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <div className="forgot">
                    <div><input type="checkbox" /> <span>Remember me</span></div>
                    <div>
                        <p>Forgot password?</p>
                    </div>
                </div>
                    <button className="log"><Link to='/sidebar'>Login</Link></button>
                    <div className="account">
                <p className="dont">Don’t have an account?<a href=""> Sign up</a></p>
            </div>
                </form>
            </div>
        </div>
    )
}

export default VendorSignIn;