import React from "react";
import "../styles/product.css";
import SingleProduct from "./singleProduct";
const FeaturedProduct = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="Products__Wrapper">
      <div className="cover">
        <h1>Recently Added Products</h1>
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
