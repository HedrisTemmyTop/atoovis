import React from "react";
import "../../styles/auth/signin.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { resetRegisterState } from "../../slices/buyerSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = (props) => {
  const buyer = useSelector((state) => state.buyers); //Get buyer state from redux
  console.log(buyer);
  const dispatch = useDispatch(); // call to action

  useEffect(() => {
    dispatch(resetRegisterState());
  }, []);

  const [fullname, setFullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");
  const [lastname, setLastName] = useState("");
  const signInWithGoogleHandler = async () => {
    try {
      const response = await axios.get(
        "https://atoovis-be.herokuapp.com/auth/google"
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    setnumber(e.target.value);
  };
  const handlelastnameChange = (e) => {
    setLastName(e.target.value);
  };

  const onSignUpSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      email: email,
      password: password,
      firstname: fullname,
      lastname: lastname,
      number: number,
    };
    if (email.trim() === "" || password.trim() === "") {
      setErr("email or passsword cannot be empty");
    } else {
      // props.register(formValues);
      //   dispatch(login(formValues));
      props.register(formValues);

      // dispatch(sendOtp({ number: number }));
      //   dispatch(registerBuyer(formValues));

      console.log(formValues);
    }
  };
  //   console.log("auth", user, error, isLoading);

  return (
    <div className="sign">
      <div className="wel">
        <h1> Sign Up</h1>
        <p>Create an account and get upto 50% on selected products</p>
      </div>
      <form action="" onSubmit={onSignUpSubmit}>
        <div className="signin">
          <div className="new2">
            {/* <label htmlFor="">Full name</label> */}
            <input
              type="text"
              onChange={handleFullnameChange}
              placeholder="first name"
            />
          </div>
          <div className="new2">
            {/* <label htmlFor="">Full name</label> */}
            <input
              type="text"
              onChange={handlelastnameChange}
              placeholder="last name"
            />
          </div>
          <div className="new">
            {/* <label htmlFor="">Email Address</label> */}
            <input
              type="text"
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>
          <div className="new2">
            {/* <label htmlFor="">Phone Number</label> */}
            <input
              type="number"
              onChange={handleNumberChange}
              placeholder="Phone number"
            />
          </div>

          <div className="new3">
            {/* <label htmlFor="">Password</label> */}
            <input
              type="password"
              onChange={handlePassChange}
              placeholder="password"
            />
          </div>
        </div>

        <button className="btn1" disabled={buyer.isLoading ? true : false}>
          {buyer.isLoading ? "Connecting..." : "Sign up"}
        </button>
        <div className="or">
          <p>OR</p>
        </div>
      </form>
      <button className="btn2" onClick={signInWithGoogleHandler}>
        <img src="" alt="" />
        <p>Sign in with google</p>
      </button>
      <div className="account">
        <p>
          Already have an account?<a href="">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
