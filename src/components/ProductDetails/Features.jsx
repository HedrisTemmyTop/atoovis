import React from "react";
import classes from "../../styles/ProductDetails.module.css";
const Features = ({ keyFeatures }) => {
  return (
    <div className={classes.FeaturesWrapper}>
      <div className={classes.DetailsMain}>
        <div className={classes.Features}>
          <ul>
            <h2>Key Features</h2>
            <li>Free, Hypoallergenic, pH neutral</li>
            <li>
              Our most caring and safety-tested formula is ophthalmologist,
              dermatologist and pediatrician tested
            </li>
            <li>
              Tear free formula helps baby's skin retain it's natural moisture
            </li>
            <li>Rich, creamy lather leaves skin feeling clean and soft</li>
            <li>Specially formulated with a delicate fragrance</li>
            <li>400ml</li>
            <li>Product from the UK </li>
            <li>
              This not only smells lovely but leaves his skin feeling really
              soft and moisturised which benefits ezcema prone skin massive
            </li>
          </ul>
          <ul>
            <h2>Key Features</h2>

            {Object.keys(keyFeatures).map((key) => (
              <div>
                {key}: {keyFeatures.key}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
