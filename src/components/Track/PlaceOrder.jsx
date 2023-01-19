import React from "react";
import one from "../../assets/place/Frame 1000005022 (2).png";
import two from "../../assets/place/Frame 1000005023.png";
import three from "../../assets/place/Frame 1000005024.png";
import four from "../../assets/place/Frame 1000005025.png";
import five from "../../assets/place/Frame 1000005026.png";
import six from "../../assets/place/Frame 1000005027.png";
import seven from "../../assets/place/Frame 1000005028.png";
import { Link } from "react-router-dom";
// import four from '../../assets/place/Frame 1000005025.png'

import ToggleVisibility from "./content/ToggleVisibility";

const PlaceOrder = () => {
  return (
    <div>
      <div>
        <iframe
          className="you-tube"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <div className="track-ing">
          <h1>Place Order</h1>
          <p>To place an order follow the steps below</p>
          <ol>
            <li>Search for an item using the search bar</li>
            <li>
            Compare prices & vendor score
            </li>
            <li>
            Add to your cart
            </li>
            <li>
            Then pay at checkout
            </li>
          </ol>
          {/* <button onClick={toggleShow}>{buttonText}</button> */}
          <ToggleVisibility>
            <div className="click">
              <h2>
              Using the <span>Product Catalog</span>, select a <span>Category</span>
              </h2>
              <img src={one} alt="" />
            </div>
            <div className="click">
              <h2>
              Utilizing <span>Search</span> If you are looking for something in particular, enter it in the search box at the top of the page. There are all related products available.
              </h2>
              <img src={two} alt="" />
            </div>
            <div className="click">
              <h2>
              Click <span>Add to Cart.</span> Delivery estimation date is displayed under delivery information
              </h2>
              <img src={three} alt="" />
            </div>
            <div className="click">
            <h2>
                Based on the item click the <span>View Cart</span> and Checkout
                button or the <span>Cart Icon</span> at the top right of your
                screen
              </h2>
              <img src={four} alt="" />
            </div>
            <div className="click">
              <h2>
                Based on the item click the <span>View Cart</span> and Checkout
                button or the <span>Cart Icon</span> at the top right of your
                screen
              </h2>
              <img src={five} alt="" />
            </div>
            <div className="click">
              <h2>
                Click the Proceed to <span>Checkout Button</span>
              </h2>
              <img src={six} alt="" />
            </div>
            <div className="click">
              <h2>
                Complete the <span>Payment Steps</span>
              </h2>
              <img src={seven} alt="" />
            </div>
            <div className="click">
              <h2>
                Click <Link>here</Link> to place your order on your dashboard
              </h2>
              {/* <img src={one} alt="" /> */}
            </div>
          </ToggleVisibility>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
