import React from "react";
import two from "../../assets/cancel/Frame 1000005023.png";
import three from "../../assets/cancel/Frame 1000005024.png";
import four from "../../assets/cancel/Frame 1000005025.png";
import ToggleVisibility from "./content/ToggleVisibility";
import { Link } from "react-router-dom";

const CancelOrder = () => {
  return (
    <div>
      <div>
        <iframe
          className="you-tube"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <div className="track-ing">
          <h1>Order Cancellation</h1>
          <p>To track an order follow the steps below</p>
          <ol>
            <li>From your account click on orders</li>
            <li>
              Then click see details in front of the order you wish to track
            </li>
            <li>
              Click the Track Item button and the delivery details willl be
              displayed
            </li>
          </ol>
          {/* <button onClick={toggleShow}>{buttonText}</button> */}
          <ToggleVisibility>
            <div className="click">
              <h2>
              Click See <span>Details</span> in front of the order you want to cancel in your <span>Atoovis Account's Orders</span> list.
              </h2>
              <img src={two} alt="" />
            </div>
            <div className="click">
              <h2>
              Click the <span>Cancel</span> Item button
              </h2>
              <img src={three} alt="" />
            </div>
            <div className="click">
              <h2>
              Choose the appropriate quantity and cancellation reason from the drop-down menus, then submit.
              </h2>
              <img src={four} alt="" />
            </div>
            <div className="click">
              <h2>
              Click <Link>here</Link> to cancel your order on your dashboard
              </h2>
              {/* <img src={four} alt="" /> */}
            </div>
          </ToggleVisibility>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
