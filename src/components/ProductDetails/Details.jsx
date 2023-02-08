import React from "react";
import classes from "../../styles/ProductDetails.module.css";
import VectorLeft from "../../assets/VectorLeft.png";
const Details = ({ details, name }) => {
  return (
    <React.Fragment>
      <div className={classes.Details}>
        <div className={classes.DetailsMain}>
          <h2>Product details</h2>
          <p>Product details {name}</p>
          <p>{details}</p>
        </div>
      </div>
      <div className={classes.DesMobile}>
        <h2 className={classes.DesMobileHead}>Product Details</h2>
        <div className={classes.MobileDesTab}>
          <h2>Description</h2>
          <span>
            <img src={VectorLeft} alt="chevron left" />
          </span>
        </div>
        <div className={classes.DetailsMain}>
          Baby Dove Rich Moisture Head to Toe Wash 400ml Help protect and
          cleanse your baby's skin during bath time with Baby Dove Rich Moisture
          Head to Toe Wash. Featuring a tear-free formula that helps your baby's
          skin
        </div>
        <div className={classes.DetailsMain}>
          <h2> Return Policy</h2>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing non neque pellentesque adipiscing adipiscing eu feugiat.
            Purus aliquet libero, turpis id. Gravida urna vel tellus leo.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
