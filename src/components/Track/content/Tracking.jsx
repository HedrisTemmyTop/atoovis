import React from "react";
import one from "../../../assets/track/Frame 1000005022 (1).png";
import '../../../styles/BuyerSide/track.css'

const Tracking = () => {
  return (
    <div>
      <div className="click">
        <p>
          Click the drop-down arrow beside Help and select
          <span>Place & Track Orders</span>
          <img src={one} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Tracking