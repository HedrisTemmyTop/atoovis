import React from "react";

import VectorLeft from "../../assets/VectorLeft.png";
import { BsStarFill } from "react-icons/bs";
import { SiCachet } from "react-icons/si";
import classes from "../../styles/ProductDetails.module.css";
const ReviewComment = (props) => {
  return (
    <React.Fragment>
  
      <div
        className={classes.CommentWrapper}
        style={
          props.i === 0
            ? null
            : {
                borderTop: "1px solid #b8bcbc",
              }
        }
      >
        <div className={classes.ReviewBox}>
          <div className={classes.ReviewBoxLeft}>
            <div className={classes.ProductRating}>
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
              <BsStarFill className={classes.Rate} />
            </div>
            <h2 className={classes.ReviewComment}>
              I love it, it came as expected
            </h2>
            <div className={classes.ReviewUser}>
              <div className={classes.ReviewUserImg}>AY</div>
              <div>
                <div className={classes.ReviewComment}>Ayodeji Ayodeji</div>
                <div className={classes.RevDate}>08/01/2021</div>
              </div>
            </div>
          </div>
          <div className={classes.ReviewBoxRight}>
            <SiCachet />
            <span>Verified purchase</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewComment;
