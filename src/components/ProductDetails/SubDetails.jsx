import React from "react";
import classes from "../../styles/ProductDetails.module.css";
import img from "../../assets/images/Vector.png";
const SubProduct = () => {
  return (
    <section className={classes.BuyerProtection}>
      <span className={classes.Buyer}>Buyer protection:</span>
      <span className={classes.Content}>
        <span className={classes.Body}>
          <span className={classes.Img}>
            <img src={img} alt="vector" />
          </span>
          <span>Return Policy</span>
        </span>
        <span className={classes.Body}>
          <span className={classes.Img}>
            {" "}
            <img src={img} alt="vector" />
          </span>
          <span>Secure payment</span>
        </span>
        <span className={classes.Body}>
          <span className={classes.Img}>
            {" "}
            <img src={img} alt="vector" />
          </span>
          <span>Customer support</span>
        </span>
        <span className={classes.Body}>
          <span className={classes.Img}>
            {" "}
            <img src={img} alt="vector" />
          </span>
          <span>Refund no delivery</span>
        </span>
      </span>
    </section>
  );
};

export default SubProduct;
