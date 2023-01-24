import React from "react";
import classes from "../../styles/ProductDetails.module.css";
const Buttons = () => {
  return (
    <div className={classes.BtnWrapper}>
      <div className={classes.ToggleBtns}>
        <button className={[classes.ToggleBtn, classes.active].join(" ")}>
          <span>Overview</span>
        </button>
        <button className={classes.ToggleBtn}>
          <span>Description</span>
        </button>
        <button className={classes.ToggleBtn}>
          <span>Shipping</span>
        </button>
        <button className={classes.ToggleBtn}>
          <span>Warranty</span>
        </button>
        <button className={classes.ToggleBtn}>
          <span>Return policy</span>
        </button>
        <button className={classes.ToggleBtn}>
          <span>Review</span>
        </button>
      </div>
      <div>new</div>
    </div>
  );
};

export default Buttons;
