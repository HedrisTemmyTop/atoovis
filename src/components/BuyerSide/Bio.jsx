import React from "react";
import "../../styles/BuyerSide/buyer.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "react-modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Bio = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      localStorage.setItem("authenticated", false);
      navigate("/");
    }

    axios
      .get("https://atoovis-be.herokuapp.com/users/" + userId, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setUser(response.data.user))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bow">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Personal Info</h1>
        </div>
      </div>

      <form action="">
        <div className="doe">
          <div className="for">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="for">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className="for">
            <label htmlFor="">Gender</label>
            <input type="text" />
          </div>
          <div className="for">
            <label htmlFor="">Age</label>
            <input type="number" />
          </div>
          <div className="for">
            <label htmlFor="">Email Address</label>
            <input type="text" />
          </div>
          <div className="for">
            <label htmlFor="">Phone Number</label>
            <input type="number" />
          </div>
          <div className="for">
            <label htmlFor="">New Password</label>
            <input type="text" />
          </div>
          <div className="for">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="forr for">
          <label htmlFor="">Confirm New Password</label>
          <input type="text" />
        </div>
        <div className="for">
          <button>Save Bio</button>
        </div>
      </form>
    </div>
  );
};

export default Bio;
