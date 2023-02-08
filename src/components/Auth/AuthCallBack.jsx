import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const AuthCallBack = () => {
  console.log("Hello world");
  const { token } = useParams();
  const navigate = useNavigate();
  localStorage.setItem("accessToken", token);
  localStorage.setItem("registered", true);
  localStorage.setItem("authenticated", true);
  useEffect(() => {
    navigate("/");
  }, []);
};

export default AuthCallBack;
