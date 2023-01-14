import React, { useState } from "react";
import styles from "../../../styles/VendorDash/Dashboard.module.css";
import { BiCategoryAlt } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../../styles/vendor/Addproduct.css";
import round from "../../../../src/assets/images/Header/round.png";
import roundTwo from "../../../../src/assets/images/Header/Round-Stepper.png";
import roundThree from "../../../../src/assets/images/Header/Round-Stepper1.png";
import roundFour from "../../../../src/assets/images/Header/Frame 966.png";
import "../../../styles/vendor/Addproduct.css";
import { MdArrowForward } from "react-icons/md";

const ProductRequirement = ({ setValue, InputData, onchange }) => {
  const percentage = 75;

  const {
    product_box_inside,
    product_note,
    product_dimension,
    product_weight,
    product_warrant,
    product_warrant_type,
    product_warrant_address,
    product_certification,
    product_text_manufacturer,
    product_care_label,
    gender_type,
    heel_type,
    seasons,
    size_type,
    sole_tpye,
    color_type,
  } = InputData;

  const [product_weightErr, setproduct_weightErr] = useState("");

  const validateformButton = () => {
    if (product_weight) {
      return false;
    } else {
      return true;
    }
  };

  const validateform = () => {
    if (!product_weight) {
        setproduct_weightErr("Product Line is required");
    }
    else {
      setValue(2);
      // console.log("ffff");
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.topnav}>
        <BiCategoryAlt /> <p> / Products / Add Products</p>
      </div>

      <div className="ppr">
        <div className="cot">
          <div>
            <div style={{ display: "flex" }} onClick={() => setValue(1)}>
              <img src={roundThree} alt="" width={30} />
              <p
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#757E7E",
                }}
              >
                Product Information
              </p>
            </div>
            <div style={{ display: "flex" }} onClick={() => setValue(2)}>
              <img src={roundThree} alt="" width={30} />
              <p
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#757E7E",
                }}
              >
                Product Details
              </p>
            </div>
            <div style={{ display: "flex" }} onClick={() => setValue(3)}>
              <img src={round} alt="" width={30} />
              <p
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                Product Requirements
              </p>
            </div>
            <div style={{ display: "flex" }} onClick={() => setValue(4)}>
              <img src={roundTwo} alt="" width={30} />
              <p
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#757E7E",
                }}
              >
                Product Pricing
              </p>
            </div>
            <div style={{ display: "flex" }} onClick={() => setValue(5)}>
              <img src={roundFour} alt="" width={30} />
              <p
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#757E7E",
                }}
              >
                Images
              </p>
            </div>
          </div>
        </div>
        <div className="exist">
          <div className="nave">
            <div
              onClick={() => setValue(1)}
              style={{
                display: "flex",
                width: "auto",
                marginRight: 5,
                alignItems: "center",
              }}
            >
              <h2>Product Info</h2>
              <MdArrowForward />
            </div>
            <div
              onClick={() => setValue(2)}
              style={{
                display: "flex",
                width: 150,
                marginRight: 5,
                alignItems: "center",
              }}
            >
              <h2>Product Details </h2>
              <MdArrowForward />
            </div>
            <div
              onClick={() => setValue(3)}
              style={{
                display: "flex",
                width: 150,
                marginRight: 5,
                alignItems: "center",
              }}
            >
              <h2 style={{ color: "#4CC5D2" }}>Product Requirements</h2>
              <MdArrowForward />
            </div>
            <div
              onClick={() => setValue(4)}
              style={{
                display: "flex",
                width: 150,
                marginRight: 5,
                alignItems: "center",
              }}
            >
              <h2>Product Pricing</h2>
              <MdArrowForward />
            </div>
            <div
              onClick={() => setValue(5)}
              style={{
                display: "flex",
                width: 150,
                marginRight: 5,
                alignItems: "center",
              }}
            >
              <h2>Images</h2>
            </div>
          </div>
          <h1>Create a New Product</h1>
          <p>Product Requirements</p>

          <form action="">
            <div className="labe">
              <label htmlFor="">What’s in the Box</label>
              <input
                type="text"
                name="product_box_inside"
                value={product_box_inside}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>

            <div className="labe">
              <label htmlFor="">Note</label>
              <input
                type="text"
                name="product_note"
                value={product_note}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>

            <div className="llab">
              <div className="labeb labe">
                <label htmlFor="">Dimension</label>
                <input
                  type="text"
                  name="product_dimension"
                  value={product_dimension}
                  onChange={onchange}
                />
              </div>
              <div className="labeb labe">
                <label htmlFor="">
                  Weight (Kg)<span>*</span>
                </label>
                <input
                  type="text"
                  name="product_weight"
                  value={product_weight}
                  onChange={onchange}
                />
                 {!product_weight && (
                    <small style={{ color: "red" }}>{product_weightErr}</small>
                     )}
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>
            <div className="labe">
              <label htmlFor="">Product Warranty</label>
              <input
                type="text"
                name="product_warrant"
                value={product_warrant}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>
            <div className="labe">
              <label htmlFor="">Warranty Type</label>
              <input
                type="text"
                name="product_warrant_type"
                value={product_warrant_type}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>
            <div className="labe">
              <label htmlFor="">Warranty Address</label>
              <input
                type="text"
                name="product_warrant_address"
                value={product_warrant_address}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>
            <div className="labe">
              <label htmlFor="">Certifications</label>
              <input
                type="text"
                name="product_certification"
                value={product_certification}
                onChange={onchange}
              />
            </div>
            <div className="labe">
              <label htmlFor="">Text Manufacturer</label>
              <input
                type="text"
                name="product_text_manufacturer"
                value={product_text_manufacturer}
                onChange={onchange}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>

            <div className="labe">
              <label htmlFor="">Care Label</label>
              <textarea
                name="product_care_label"
                id=""
                value={product_care_label}
                onChange={onchange}
                cols="30"
                rows="10"
                placeholder="Product highlights"
              ></textarea>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
              aliquam molestie at neque est. Quam nunc, donec sagittis diam
              purus. Est odio lectus volutpat.
            </p>

            <div className="llab">
              <div className="labeb labe">
                <label htmlFor="">Gender</label>
                <select
                  name="gender_type"
                  id=""
                  className="selll"
                  onChange={onchange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="labeb labe">
                <label htmlFor="">Heel Type</label>
                <select
                  name="heel_type"
                  id=""
                  className="selll"
                  nChange={onchange}
                >
                  <option value="">Select type</option>
                  <option value="Platform Heel">Platform Heel</option>
                </select>
              </div>
            </div>
            <div className="llab">
              <div className="labeb labe">
                <label htmlFor="">Size Type</label>
                <select
                  name="seasons"
                  id=""
                  className="selll"
                  onChange={onchange}
                >
                  <option value="">Select seasons</option>
                  <option value="Winter">Winter</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
              <div className="labeb labe">
                <label htmlFor="">Size Type</label>
                <select
                  name="size_type"
                  id=""
                  className="selll"
                  onChange={onchange}
                >
                  <option value="">Size Type</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>

            <div className="llab">
              <div className="labeb labe">
                <label htmlFor="">Sole Type</label>
                <select name="sole_type" id="" className="selll">
                  <option value="">Sole Type</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Sole owner">Sole owner</option>
                </select>
              </div>

              <div className="labeb labe">
                <label htmlFor="">Color</label>
                <input
                  type="text"
                  name="color_type"
                  value={color_type}
                  onChange={onchange}
                />
              </div>
            </div>
            {validateformButton() == true ? (
              <div onClick={validateform}  
              className="labee">
                Save and Continue
              </div>
            ) : (
              <div 
              onClick={() => setValue(4)} className="labee">
                Save and Continue
              </div>
            )}

            <div style={{ marginTop: 20 }}>
              <button className="labeee as" onClick={() => setValue(2)}>
                Previous
              </button>
              <button className="labeee">Save as Draft</button>
              <button className="labeee">Preview</button>
            </div>
          </form>
        </div>
        <div className="cot">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={75}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                textSize: "16px",
                textColor: "#000",
                trailColor: "#4CC5D2",
                backgroundColor: "#4CC5D2",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRequirement;
