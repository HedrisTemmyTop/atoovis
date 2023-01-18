import React from "react";
import "../styles/product.css";
import place from "../assets/images/Header/Mask Group (3).png";
import rating from "../assets/images/Header/Ratings (1).png";
import love from "../assets/images/Header/Vector (5).png";
import SingleProduct from "./singleProduct";

const FeaturedProduct = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="Products__Wrapper">
      <div className="cover">
        <h1>Frequently Purchased Products</h1>
        <div className="FeaturedProduct__Container">
          {data.map((data, i) => (
            <SingleProduct key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
