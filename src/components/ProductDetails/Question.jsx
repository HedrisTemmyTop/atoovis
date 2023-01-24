import React from "react";

import classes from "../../styles/ProductDetails.module.css";
const Question = () => {
  return (
    <div className={classes.Question}>
      <div className={classes.QuestionHead}>
        Have a question about this product ?
      </div>
      <div className={classes.QuestionSub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        adipiscing.
      </div>
      <form className={classes.QuestionForm}>
        <input
          className={classes.QuestionInput}
          placeholder="Enter your question"
        />
        <button className={classes.QuestionSubmit}>
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default Question;
