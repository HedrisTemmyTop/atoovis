import React from "react";
import classes from "../../styles/ProductDetails.module.css";
import VectorLeft from "../../assets/VectorLeft.png";
const Details = () => {
  return (
    <React.Fragment>
      <div className={classes.Details}>
        <div className={classes.DetailsMain}>
          <h2>Product details</h2>
          <p>Product details Baby Dove Rich Moisture Head to Toe Wash 400ml</p>
          <p>
            {" "}
            Help protect and cleanse your baby's skin during bath time with Baby
            Dove Rich Moisture Head to Toe Wash. Featuring a tear-free formula
            that helps your baby's skin retain its natural moisture, this baby
            wash works into a rich, creamy lather that mildly cleanses. The
            nutrient-enriched formula helps replenish essential nutrients and
            moisture lost during bath time, leaving skin soft and clean for
            hours. And thanks to its delicate fragrance and hypoallergenic,
            pH-neutral formula, the baby wash is gentle enough for daily use.
          </p>
          <h2> Ingredients</h2>
          <p>
            {" "}
            Aqua, Glycerin, Cocamidopropyl Betaine, Sodium Cocoyl Glycinate,
            Polyacrylate-33, Benzoic Acid, Caprylyl Glycol, Citric Acid,
            Coco-Glucoside, Coconut Acid, Lauric Acid, Parfum, Phenoxyethanol,
            Sodium Benzoate, Sodium Chloride, Sodium Hydroxide, Sodium
            Isethionate, Sodium Lauroyl Isethionate, Sodium Palm Kernelate,
            Sodium Palmitate, Sodium Stearate, Stearic Acid, Styrene/Acrylates
            Copolymer, Tetrasodium EDTA, Zinc Oxide, CI 77891 Size (400) Unit
            (ML) Height (15.2) Width (8.7) Depth (4.6)
          </p>
        </div>
      </div>
      <div className={classes.DesMobile}>
        <h2 className={classes.DesMobileHead}>Product Details</h2>
        <div className={classes.MobileDesTab}>
          <h2>Description</h2>
          <span>
            <img src={VectorLeft} alt="chevron left" />
          </span>
        </div>
        <div className={classes.DetailsMain}>
          Baby Dove Rich Moisture Head to Toe Wash 400ml Help protect and
          cleanse your baby's skin during bath time with Baby Dove Rich Moisture
          Head to Toe Wash. Featuring a tear-free formula that helps your baby's
          skin
        </div>
        <div className={classes.DetailsMain}>
          <h2> Return Policy</h2>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing non neque pellentesque adipiscing adipiscing eu feugiat.
            Purus aliquet libero, turpis id. Gravida urna vel tellus leo.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
