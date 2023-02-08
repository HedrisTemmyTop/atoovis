import React from "react";
import Header from "../components/Header";
import classes from "../styles/ProductDetails.module.css";
import nextIcon from "../assets/images/next.png";
import ProductDisplay from "../components/ProductDetails/ProductDisplay";
import SubProduct from "../components/ProductDetails/SubDetails";
import Buttons from "../components/ProductDetails/Buttons";
import Details from "../components/ProductDetails/Details";
import ReturnPolicy from "../components/ProductDetails/ReturnPolicy";
import Features from "../components/ProductDetails/Features";
import SellerInfo from "../components/ProductDetails/SellerInformation";
import OtherProduct from "../components/ProductDetails/OtherProduct";
import CustomerReview from "../components/ProductDetails/CustomerReview";
import Question from "../components/ProductDetails/Question";
import axios from "axios";
import VectorLeft from "../assets/VectorLeft.png";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiEndpointURL } from "../services/config";
import { useState } from "react";
import Loader from "../components/Loder/Loader";
const ProductDetails = () => {
  const { id } = useParams();
  const data = [{}, {}, {}, {}, {}];
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiEndpointURL + "/products/" + id)
      .then((response) => {
        setLoading(false);
        setProduct(response.data.product);
        console.log(response.data.product);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.message);
        console.log(err);
      });
  }, []);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "30px",
      padding: 40,
      transform: "translate(-50%, -50%)",
    },
  };
  const openModalHandler = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  let content = null;
  if (loading) content = <Loader />;
  if (product)
    content = (
      <div className={classes.ProductPage}>
        <div className={classes.Hero}>
          <header className={classes.ProductPath}>
            <span>Home</span>
            <img src={nextIcon} alt="icon" />
            <span>Gaming</span>
            <img src={nextIcon} alt="icon" />
            <span>Playstaytion 4</span>
            <img src={nextIcon} alt="icon" />
            <span>PS4 controllers</span>
            <img src={nextIcon} alt="icon" />
            <span>100% original ps4 pad </span>
          </header>
          <ProductDisplay
            discountPrice={product.variation[0].price.toLocaleString()}
            name={product.productName}
            price={product.variation[0].salePrice
              .replace(/[a-z]+/g, "")
              .toLocaleString()}
            store={product.vendor}
            productId={id}
            productQuantity={product.variation[0].quantity}
            openModal={openModalHandler}
          />
          <SubProduct />
          <Buttons />
          <Details
            name={product.productName}
            details={product.productDescription}
          />
          <Features
            features={product.productKeyFeatures}
            keyFeatures={product.requirement}
          />
          <ReturnPolicy />
          <SellerInfo />
        </div>
        <div className={classes.SubHero}>
          <div className={classes.WholeContentWrapper}>
            <h2
              style={{
                marginBlock: "25px !important",
                fontWeight: "600",
              }}
            >
              Customer Who also viewed this also viewd
            </h2>
            <div className={classes.OtherProductWrapper}>
              {data.map((_, i) => (
                <OtherProduct key={i} />
              ))}
            </div>
          </div>
          <div className={classes.MobileHeaders}>
            <div className={classes.PhoneHead}>
              <h2 className={classes.DesMobileHead}>
                Verified Customer Feedback
              </h2>
              <div className={classes.MobileDesTab}>
                <div>
                  <h2>Product Rating & Review</h2>
                  <span className={classes.MobileRatings}>
                    <span className={classes.RatingNumber}>4.5/5</span>
                    <span className={classes.RatingsTotal}>(135) Ratings</span>
                  </span>
                </div>
                <span>
                  <img src={VectorLeft} alt="chevron left" />
                </span>
              </div>
            </div>
          </div>
          <CustomerReview />
          <div className={classes.WholeContentWrapper}>
            <h2
              style={{
                marginBlock: "25px !important",
                fontWeight: "600",
              }}
            >
              You may also like
            </h2>
            <div className={classes.OtherProductWrapper}>
              {data.map((_, i) => (
                <OtherProduct key={i} />
              ))}
            </div>
          </div>
          <div className={classes.WholeContentWrapper}>
            <h2
              style={{
                marginBlock: "25px",
                fontWeight: "600",
              }}
            >
              More Items from this Seller
            </h2>
            <div className={classes.OtherProductWrapper}>
              {data.map((_, i) => (
                <OtherProduct key={i} />
              ))}
            </div>
          </div>

          <Question />
          <div className={classes.WholeContentWrapper}>
            <h2
              style={{
                marginBlock: "25px !important",
                fontWeight: "600",
              }}
            >
              Sponsored Products
            </h2>
            <div className={classes.OtherProductWrapper}>
              {data.map((_, i) => (
                <OtherProduct key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  if (error) content = <div>Product not found</div>;
  return (
    <React.Fragment>
      <Header />
      {content}
    </React.Fragment>
  );
};

export default ProductDetails;
