import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos, MdVerifiedUser } from "react-icons/md";
import "../../styles/Buyer/cart.css";
import Card from "./Card";
import Items from "./Items";
import MoreProducts from "../../components/MoreProducts";

const MyCart = () => {
  const cartArr = [{}, {}, {}];
  return (
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
            style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
          >
            <input type="checkbox" name="" id="" />
            <p style={{ fontSize: 24, paddingLeft: 10, fontWeight: 700 }}>
              Select all items <span>(4)</span>
            </p>
          </div>
          <div className="cartt">
            <div className="cart-left">
              <div className="cart__wrapper">
                {cartArr.map((cart, i) => (
                  <Items key={i} />
                ))}
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
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
};

export default MyCart;
