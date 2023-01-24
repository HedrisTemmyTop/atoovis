import classes from "../../styles/ProductDetails.module.css";
import icon from "../../assets/images/ico.png";

import VectorLeft from "../../assets/VectorLeft.png";
import { Link } from "react-router-dom";
import React from "react";
const SellerInfo = () => {
  return (
    <React.Fragment>
      <div className={classes.MobileHeaders}>
        <h2 className={classes.DesMobileHead}>Seller Information</h2>
        <div className={classes.MobileDesTab}>
          <h2>Viniel Stores</h2>
          <span>
            <img src={VectorLeft} alt="chevron left" />
          </span>
        </div>
      </div>

      <div className={classes.DetailsMain}>
        <div className={classes.InfoWrapper}>
          <div className={classes.Info}>
            <div>
              <h2 className={classes.SellerHeader}>Sellers Information</h2>
              <div>
                <span className={classes.StoreName}>
                  Viniel
                  <br />
                </span>
                94% seller score <br />
                218 followers
              </div>
              <Link to="/" className={classes.CheckOutMore}>
                Check out more on Seller
              </Link>
            </div>
            <div className={classes.SellerBottom}>
              <h2 className={classes.SellerBottomHead}>Seller Performance</h2>
              <div className={classes.PerformanceBlock}>
                <img src={icon} alt="performance icon" />
                <span>Seller Performance rate: Excellent</span>
              </div>
              <div className={classes.PerformanceBlock}>
                <img src={icon} alt="performance icon" />
                <span>Quality score: Excellent</span>
              </div>
              <div className={classes.PerformanceBlock}>
                <img src={icon} alt="performance icon" />

                <span>Customer rate: Good</span>
              </div>
            </div>
          </div>
          <div>
            <button className={classes.SellerBtn}>
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SellerInfo;
