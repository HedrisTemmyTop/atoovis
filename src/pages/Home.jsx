import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Swiper from "../components/Swipper";
import FeaturedProduct from "../components/FeaturedProduct";
import RecentlyAdded from "../components/AddedProduct";
import MoreProducts from "../components/MoreProducts";
import FrequentlyPurchased from "../components/FrequentlyPurchased";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Swiper />
      <Link to="./featured">
        <FeaturedProduct />
      </Link>
      <Link to="recently">
        <RecentlyAdded />
      </Link>
      <MoreProducts />
      <Link to="frequent">
        {" "}
        <FrequentlyPurchased />
      </Link>
    </div>
  );
};

export default Home;
