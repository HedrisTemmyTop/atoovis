import React, { useState } from "react";
import "../../styles/vendor/signup.css";
import logo from "../../assets/images/Header/Atoovislogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login,signup } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const VendorSignup = () => {
  const auth = useSelector((state) => state.auth); //get state
  const dispatch = useDispatch(); // call to action
  const { user, isLoading, error, isAuthenticated } = auth;
  const { err, setErr } = useState(error);
  const { formData, handleInputChange } = useForm({
    username: "",
    password: "",
    email: "",
    password_confirmation: "",
    phone_number: "",
  });
  const history = useNavigate();
  const { username, email, password, password_confirmation, phone_number } =
    formData;

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
  const onSignupSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      email: email,
      password: password,
      fullname: username,
      number: phone_number,
      type:"vendor"
    };
    if (email.trim() === "" || password.trim() === "") {
      setErr("email or passsword cannot be empty");
    } else {
      dispatch(signup(formValues));
    }
    console.log(formValues);
  };
  console.log("auth", user, isAuthenticated, error, isLoading);

  return (
    <div className="container">
      <div className="left1">
        <h1>Sign Up</h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus
          ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis
          non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor
          morbi ut suspendisse.{" "}
        </p>
      </div>

      {error == null && isAuthenticated != null ? (
        <div className="righty">
          {/* <p>X</p> */}
          <img src={logo} alt="" />
          <h1>Become a vendor today, sell online with Atoovis!</h1>
          {error && <h3>{error}!!</h3>}
          {err && <h3>{err}!!</h3>}


          <form action="">
            <div className="formy formy4">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formy formy5">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button className="log" onClick={onLoginSubmit}>
              Login
            </button>
            <div className="account">
              <p className="dont">
                Don’t have an account?<a href=""> Sign up</a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="righty">
          {/* <p>X</p> */}
          <img src={logo} alt="" />

          <h1>Become a vendor today, sell online with Atoovis!</h1>
          {error && <h3>{error}!!</h3>}
          {err && <h3>{err}!!</h3>}


          <form action="">
            <div className="formy formy3">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="formy formy4">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formy formy5">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <h6>Passwords must be at least 6 characters</h6>
            <div className="formy formy6">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleInputChange}
              />
            </div>
            <div className="formy formy7">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={handleInputChange}
              />
            </div>

            {isLoading === null ? (
              <button className="log" onClick={onSignupSubmit}>
                Signup
              </button>
            ) : (
              <button className="log">Loading ...</button>
            )}
            <div className="account">
              <p className="dont">
              Already have an account?<a href=""> Sign In</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default VendorSignup;
