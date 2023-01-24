import React from "react";
import image from "../../assets/images/productImage.png";
import { AiFillHeart } from "react-icons/ai";
import classes from "../../styles/ProductDetails.module.css";
import { FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
const OtherProduct = () => {
  return (
    <div className={classes.OtherProduct}>
      <div className={classes.OtherImage}>
        <img src={image} alt="product image" />
      </div>
      <div className={classes.Des}>
        <span className={classes.ShortDes}>
          Product name and brief description...
        </span>
        <AiFillHeart className={classes.Love} />
      </div>
      <div className={classes.OtherPrice}>
        <h2 className={classes.OtherPriceReal}>₦54,500</h2>
        <span className={classes.OtherPriceFake}>₦64,500</span>
      </div>
      <div className={classes.OtherRating}>
        <BsStarFill className={classes.OtherRate} />
        <BsStarFill className={classes.OtherRate} />
        <BsStarFill className={classes.OtherRate} />
        <BsStarFill className={classes.OtherRate} />
        <FiStar className={classes.OtherRated} />
        <span>(41)</span>
      </div>
      <button className={classes.OtherCart}>
        {" "}
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default OtherProduct;
