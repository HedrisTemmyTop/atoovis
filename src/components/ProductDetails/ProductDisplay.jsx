import React from "react";
import productImage from "../../assets/images/productImage.png";
import classes from "../../styles/ProductDetails.module.css";
import subImage from "../../assets/images/subImage.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import addToCart from "../../services/addToCart";
import { useState } from "react";
import { useEffect } from "react";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem("accessToken");
  const { discountPrice, name, price, store, productId, productQuantity } =
    props;
  const navigate = useNavigate();
  const increaseQuatity = () => {
    if (quantity === productQuantity) return;
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  const addCartHandler = () => {
    if (!token) {
      localStorage.setItem("authenticated", false);
      navigate("/");
      return;
    }
    const data = {
      productId: productId,
      quantity: quantity,
    };

    addToCart(data, token);
  };
  useEffect(() => {}, []);
  return (
    <main className={classes.ProductMain}>
      <div className={classes.ProductImages}>
        <div className={classes.MainImages}>
          <img src={productImage} alt="" />
        </div>
        <div className={classes.SubImages}>
          <img src={subImage} alt="other images" />
          <img src={subImage} alt="other images" />
          <img src={subImage} alt="other images" />
          <img src={subImage} alt="other images" />
          <img src={subImage} alt="other images" />
        </div>
      </div>
      <div className={classes.ProductDetails}>
        <h2 className={classes.Name}>{name}</h2>
        <span>
          <Link to={"/" + store} className={classes.Store}>
            KYC Stores
          </Link>
        </span>
        <div className={classes.ProductRating}>
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <FiStar className={classes.Rated} />
        </div>
        <div className={classes.Price}>
          <h2 className={classes.Real}>₦{discountPrice}</h2>
          <div className={classes.Fake}>
            <span className={classes.FakePrice}>
              ₦{Number(price).toLocaleString()}
            </span>
            <span className={classes.Percent}>-41%</span>
          </div>
        </div>
        <div className={classes.Quantity}>
          <button className={classes.BtnQuantity} onClick={increaseQuatity}>
            <span>+</span>
          </button>
          <span className={classes.Val}>{quantity}</span>
          <button className={classes.BtnQuantity} onClick={decreaseQuantity}>
            <span>-</span>
          </button>
        </div>
        <div className={classes.CartBtn}>
          <button className={classes.Buy}>
            <span>Buy now</span>
          </button>
          <button className={classes.Cart} onClick={addCartHandler}>
            <span>Add to Cart</span>
          </button>
        </div>
        <div className={classes.Share}>
          <span className={classes.Shares}>
            Share this product with friends:
          </span>
          <span className={classes.Icons}>
            <span className={classes.Icon}>
              <AiOutlineTwitter className={classes.ShareIcon} />
            </span>
            <span className={classes.Icon}>
              <AiFillInstagram className={classes.ShareIcon} />
            </span>
          </span>
        </div>
      </div>
      <div className={classes.ProductDetailsMobile}>
        <div className={classes.ProductDetailsMobileHead}>
          <h2 className={classes.Name}>PS4 Pad Official Controller</h2>
          <AiFillHeart className={classes.LoverRed} />
        </div>

        <div className={classes.MobileMain}>
          <span
            style={{
              marginTop: "16px",
            }}
          >
            <Link to={"/" + store} className={classes.Store}>
              KYC Stores
            </Link>
          </span>
          <div className={classes.MobileQuantity}>
            <div className={classes.ProductRating}>
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <FiStar className={classes.Rated} />
            </div>

            <div className={classes.Quantity}>
              <button className={classes.BtnQuantity}>
                <span>+</span>
              </button>
              <span className={classes.Val}>1</span>
              <button className={classes.BtnQuantity}>
                <span>-</span>
              </button>
            </div>
          </div>
          <div className={classes.Price}>
            <h2 className={classes.Real}>₦54,500</h2>
            <div className={classes.Fake}>
              <span className={classes.FakePrice}>₦64,500</span>
              <span className={classes.Percent}>-41%</span>
            </div>
          </div>
          <div className={classes.Share}>
            <span className={classes.Shares}>
              Share this product with friends:
            </span>
            <span className={classes.Icons}>
              <span className={classes.Icon}>
                <AiOutlineTwitter className={classes.ShareIcon} />
              </span>
              <span className={classes.Icon}>
                <AiFillInstagram className={classes.ShareIcon} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDisplay;
