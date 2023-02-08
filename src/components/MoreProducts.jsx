import React from "react";
import "../styles/product.css";
import place from "../assets/images/Header/Mask Group (3).png";
import rating from "../assets/images/Header/Ratings (1).png";
import love from "../assets/images/Header/Vector (5).png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../slices/productSlice";
import Loader from "./Loder/Loader";
const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  let content = null;
  if (state.isLoading) content = <Loader />;
  if (state.isError) content = "Network error";
  if (state.data)
    content = (
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-auto place-items-center">
        {state.data.products.slice(0, 6).map((product) => (
          <div className="inner" key={product._id}>
            <img src={place} alt="" />
            <p className="till">
              {product.productDescription.split("").slice(0, 30).join("")}...
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="contain1"
              >
                <p className="little">
                  ₦
                  {parseInt(
                    product.variation[0].salePrice.replace(/[^\d]/g, "")
                  )}
                </p>
                <p className="lit">
                  ₦
                  {product.variation[0].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <div>
                <img src={love} alt="" className="love" />
              </div>
            </div>
            <img src={rating} alt="" style={{ marginTop: 10 }} />
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    );
  return (
    <div className="cover">
      <h1>More Products</h1>
      {content}
    </div>
  );
};

export default FeaturedProduct;
