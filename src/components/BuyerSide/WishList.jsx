import React from "react";
import "../../styles/BuyerSide/buyer.css";
import wish from "../../assets/images/Header/Mask Group.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const WishList = () => {
  const [favorite, setFavourite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LGA, setLGA] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [stretNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [edit, setEdit] = useState(null);
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      localStorage.setItem("authenticated", false);
      navigate("/");
    }
    setLoading(true);
    axios
      .get("https://atoovis-be.herokuapp.com/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setFavourite(response.data.address);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div>
          <h1>My Wishlist</h1>
        </div>
      </div>
      <div className="boww bow">
        <img src={wish} alt="" />
        <h3>No Favourites yet!</h3>
        <p>Feel free to explore our product categories</p>
        <button>Explore Product Categories</button>
      </div>
    </div>
  );
};

export default WishList;
