import React from "react";
import '../../styles/vendor/signup.css'
import logo from '../../assets/images/Header/Atoovislogo.png'
const VendorSignIn = () => {
    return(
        <div className="container">
            <div className="left1">
               <h1>Sign Up</h1>
               <p className="lorem">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. 
                Enim sed tortor morbi ut suspendisse. </p>
            </div>
            <div className="righty">
                {/* <p>X</p> */}
                <img src={logo} alt="" />
                <h1>Become a vendor today,
sell online with Atoovis!</h1>

                <form action="">
                    <div className="formy formy3">
                        <label htmlFor="">Your Name</label>
                        <input type="text" />
                    </div>
                    <div className="formy formy4">
                        <label htmlFor="">Email Address</label>
                        <input type="email" />
                    </div>
                    <div className="formy formy5">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <h6>Passwords must be at least 6 characters</h6>
                    <div className="formy formy6">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" />
                    </div>
                    <div className="formy formy7">
                        <label htmlFor="">Phone Number</label>
                        <input type="password" />
                    </div>
                   
                    <button className="log">Login</button>
                    <div className="account">
                <p className="dont">Don’t have an account?<a href=""> Sign up</a></p>
            </div>
                </form>
            </div>
        </div>
    )
}

export default VendorSignIn;