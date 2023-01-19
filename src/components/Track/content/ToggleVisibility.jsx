import React, { useState } from "react";
import '../../../styles/BuyerSide/track.css'
export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "See Less" : "Show More";

  return (
    <div className="component-container">
        <p onClick={toggleShow}>{buttonText}</p>
      {show && children}
      
    </div>
  );
}