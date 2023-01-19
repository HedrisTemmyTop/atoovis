import React from "react";
import swipe from "../assets/images/Header/swipe.png";
import "../styles/swipper.css";
import MainSwipper from "./MainSwipper";

const Swipper = () => {
  return (
    <div className="swipe">
      <div className="Carousel">
        <MainSwipper />
        {/* <img src={swipe} alt="" className='imag'/> */}
      </div>
      <div className="leftyy">
        <h1>Category Overview</h1>
        <div className="grid grid-flow-row-dense grid-cols-3 md:grid-cols-3 grid-rows-3 gap-3">
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668808104/mobile_1_2_j2ay9e.png"
              alt=""
            />
            <p>Mobile</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png"
              alt=""
            />
            <p>Furniture</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807988/laptop_1_ullump.png"
              alt=""
            />
            <p>Laptops</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807984/women_1_pqvhto.png"
              alt=""
            />
            <p>For Women</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807981/electronics_1_tpamq3.png"
              alt=""
            />
            <p>Electronics</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807978/men_1_b2irkw.png"
              alt=""
            />
            <p>For Men</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807975/accessories_1_fvfgyj.png"
              alt=""
            />
            <p>Accessories</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807972/jewelry_1_gra030.png"
              alt=""
            />
            <p>Jewelry</p>
          </div>
          <div className="now">
            <img
              src="https://res.cloudinary.com/mindset/image/upload/v1668807972/jewelry_1_gra030.png"
              alt=""
            />
            <p>Jewelry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipper;
