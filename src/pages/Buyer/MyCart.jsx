import React from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowForwardIos, MdVerifiedUser } from "react-icons/md";
import "../../styles/Buyer/cart.css";
import Card from "./Card";
import Items from "./Items";
import MoreProducts from "../../components/MoreProducts";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loader from "../../components/Loder/Loader";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartData } from "../../slices/cartSlice";

const MyCart = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate("");

  const dispatch = useDispatch();
  const { loading, cart, error, totalPrice } = useSelector(
    (state) => state.cart
  );
  const [totalPrices, setPrice] = useState([]);
  useEffect(() => {
    if (!token) {
      localStorage.setItem("authenticated", false);
      navigate("/");
      return;
    }

    // axios
    //   .get("https://atoovis-be.herokuapp.com/cart", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     setcart(response.data.cart);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     setError(error);
    //     console.log(error);
    //   });
    dispatch(getCartData());
  }, []);
  if (cart?.length > 0) {
    dispatch(calculateTotal());
  }

  const addPriceHandler = (price) => {
    const updatedPrice = totalPrice.filter((prices) => price.id === prices.id);

    setPrice((prev) => [...prev]);
    console.log(totalPrices, price);
  };
  const changeTotalPriceHanler = () => {};
  let content = null;
  if (loading) content = <Loader />;
  if (cart && !loading)
    content = (
      <div>
        <Header />
        <div className="cart">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/"
              style={{ color: "#061F1E", fontSize: 14, fontWeight: 400 }}
            >
              Home
            </Link>
            <MdOutlineArrowForwardIos />
            <p style={{ color: "#1B5958", fontSize: 14, fontWeight: 700 }}>
              My Shopping Cart
            </p>
          </div>
          <div className="sellect">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <input type="checkbox" name="" id="" />
              <p style={{ fontSize: 24, paddingLeft: 10, fontWeight: 700 }}>
                Select all items <span>({cart.length})</span>
              </p>
            </div>
            <div className="cartt">
              <div className="cart-left">
                <div className="cart__wrapper">
                  {cart.length > 0
                    ? cart.map((item) => (
                        <Items
                          item={item}
                          key={item._id}
                          changePrice={changeTotalPriceHanler}
                          sendPrice={addPriceHandler}
                        />
                      ))
                    : null}
                </div>
                {/* <div className='item-cart'>
                        <Items/>
                        </div>
                        <div className='item-cart'>
                        <Items/>
                        </div> <div className='item-cart'>
                        <Items/>
                        </div> */}
              </div>
              <div className="cart-right">
                <Card price={totalPrice} total={cart.length} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <MoreProducts />
        </div>
      </div>
    );
  if (error) content = <div>Something went wrong try again</div>;
  return content;
};

export default MyCart;
