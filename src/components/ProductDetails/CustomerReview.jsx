import React from "react";
import { BsStarFill } from "react-icons/bs";
import classes from "../../styles/ProductDetails.module.css";
import ReviewComment from "./ReviewComment";
const CustomerReview = () => {
  const commentArr = [{}, {}, {}];
  return (
    <div className={classes.Review}>
      <div className={classes.ReviewRatings}>
        <h2 className={classes.Verified}>Verified Customer Review</h2>
        <h2 className={classes.VerifiedRatings}>Verified Ratings (4)</h2>
        <h2 className={classes.TotalRate}>5/5</h2>
        <div
          className={classes.ProductRating}
          style={{
            alignSelf: "center",
          }}
        >
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
          <BsStarFill className={classes.Rate} />
        </div>

        <div className={classes.LoadBox}>
          <span className={classes.BoxLoad}>
            <span>5</span> <BsStarFill className={classes.RateBox} />
            <span>(3)</span>
          </span>

          <span className={[classes.Load, classes.LoadFull].join(" ")}></span>
        </div>
        <div className={classes.LoadBox}>
          <span className={classes.BoxLoad}>
            <span>4</span> <BsStarFill className={classes.RateBox} />
            <span>(3)</span>
          </span>

          <span className={classes.Load}></span>
        </div>
        <div className={classes.LoadBox}>
          <span className={classes.BoxLoad}>
            <span>3</span> <BsStarFill className={classes.RateBox} />
            <span>(3)</span>
          </span>

          <span className={classes.Load}></span>
        </div>
        <div className={classes.LoadBox}>
          <span className={classes.BoxLoad}>
            <span>2</span> <BsStarFill className={classes.RateBox} />
            <span>(3)</span>
          </span>

          <span className={classes.Load}></span>
        </div>
        <div className={classes.LoadBox}>
          <span className={classes.BoxLoad}>
            <span>1</span> <BsStarFill className={classes.RateBox} />
            <span>(3)</span>
          </span>

          <span className={classes.Load}></span>
        </div>
      </div>
      <div className={classes.ReviewMain}>
        <div className={classes.ReviewMainHead}>
          <span className={classes.CommentSectionHead}>
            Comments from Verified purchase (2)
          </span>
          <span className={classes.SeeAll}>See all</span>
        </div>
        {commentArr.map((_, i) => (
          <ReviewComment key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
