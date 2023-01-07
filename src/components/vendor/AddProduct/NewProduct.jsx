import React, {useState} from "react";
import styles from '../../../styles/VendorDash/Dashboard.module.css'
import { BiCategoryAlt } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../styles/vendor/Addproduct.css'
import round from '../../../../src/assets/images/Header/round.png'
import roundTwo from '../../../../src/assets/images/Header/Round-Stepper.png'
import roundThree from '../../../../src/assets/images/Header/Round-Stepper1.png'
import roundFour from '../../../../src/assets/images/Header/Frame 966.png'
import { MdArrowForward } from 'react-icons/md'

const NewProduct = ({ setValue,InputData, onchange }) => {
    const { 
        product_line,
        product_vendor_type,
        product_type,
        product_material_type,
        product_description,
        product_youtube_id,
        product_keys_features

    } = InputData

    const [product_lineErr, setproduct_lineErr] = useState("");
    const [product_vendor_typeErr, setproduct_vendor_typeErr] = useState("");
    const [product_typeErr, setproduct_typeErr] = useState("");
    const [product_material_typeErr, setproduct_material_typeErr] = useState("");
    const [product_descriptionErr, setproduct_descriptionErr] = useState("");
    // const [product_youtube_idErr, setproduct_youtube_idErr] = useState("");
    const [product_keys_featuresErr, setproduct_keys_featuresErr] = useState("");

    const validateformButton = () => {
        if (
        product_line &&
        product_vendor_type &&
        product_type &&
        product_material_type &&
        product_description &&
        product_keys_features
        ) {
          return false;
        }
        else{
          return true;
        }
      };

    const validateform = () => {
        if (!product_line) {
            setproduct_lineErr("Product Line is required");
        } else if (!product_vendor_type) {
            setproduct_vendor_typeErr("Vendor Type is required");
        } else if (!product_type) {
            setproduct_typeErr("Product type is required");
        }
        else if (!product_material_type) {
            setproduct_material_typeErr("Material type is required");
        } 
        else if (!product_description) {
            setproduct_descriptionErr("Product description is required");
        }
        else if (!product_keys_features) {
            setproduct_keys_featuresErr("Product key features is required");
        }
        else {
          setValue(2);
          // console.log("ffff");
        }
      };

    const percentage = 50;
    return (
        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <BiCategoryAlt /> <p>  / Products / Add Products</p>
            </div>

            <div className="ppr">
                <div className="cot">
                    <div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(1)}>
                            <img src={roundThree} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E' }}>Product Information</p>
                        </div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(2)}>
                            <img src={round} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 800 }}>Product Details</p>
                        </div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(3)}>
                            <img src={roundTwo} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E', }}>Product Requirements</p>
                        </div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(4)}>
                            <img src={roundTwo} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E', }}>Product Pricing</p>
                        </div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(5)}>
                            <img src={roundFour} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E', }}>Images</p>
                        </div>
                    </div>
                </div>
                <div className="exist">
                    <div className="nave">
                        <div onClick={() => setValue(1)} style={{ display: 'flex', width: 'auto', marginRight: 5, alignItems: 'center' }}>
                            <h2 >Product Info</h2>
                            <MdArrowForward />
                        </div>
                        <div onClick={() => setValue(2)} style={{ display: 'flex', width: 150, marginRight: 5, alignItems: 'center' }}>
                            <h2 style={{ color: '#4CC5D2' }}>Product Details  </h2>
                            <MdArrowForward />
                        </div>
                        <div onClick={() => setValue(3)} style={{ display: 'flex', width: 150, marginRight: 5, alignItems: 'center' }}>
                            <h2>Product Requirements</h2>
                            <MdArrowForward />
                        </div>
                        <div onClick={() => setValue(4)} style={{ display: 'flex', width: 150, marginRight: 5, alignItems: 'center' }}>
                            <h2>Product Pricing</h2>
                            <MdArrowForward />
                        </div>
                        <div onClick={() => setValue(5)} style={{ display: 'flex', width: 150, marginRight: 5, alignItems: 'center' }}>
                            <h2 >Images</h2>
                        </div>
                    </div>
                    <h1>Create a New Product</h1>
                    <p>Product Details</p>


                    <form action="">
                        <div className="labe">
                            <label htmlFor="">Product Line*</label>
                            <select name="product_line" id="" required className="sell" onChange={onchange} >
                                <option value="">Select Product line</option>
                                <option value="gadgets">Line</option>

                            </select>
                            {!product_line && (
                            <small style={{ color: "red" }}>{product_lineErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Dictum aliquam molestie at neque est. Quam nunc,
                            donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Vendor Type<span>*</span></label>
                            <input type="text"  name="product_vendor_type" value={product_vendor_type} onChange={onchange} required />
                            {!product_vendor_type && (
                            <small style={{ color: "red" }}>{product_vendor_typeErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. Quam nunc,
                            donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Type</label>
                            <input type="text" name="product_type" value={product_type} onChange={onchange}  required />
                            {!product_type && (
                            <small style={{ color: "red" }}>{product_typeErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Main Material</label>
                            <input type="text" name="product_material_type" value={product_material_type} onChange={onchange} required />
                            {!product_material_type && (
                            <small style={{ color: "red" }}>{product_material_typeErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Product Description<span>*</span></label>
                            <textarea 
                            name="product_description" value={product_description} onChange={onchange}
                            id="" cols="30" rows="10" placeholder="Product description"></textarea>
                             {!product_description && (
                            <small style={{ color: "red" }}>{product_descriptionErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">YouTube ID</label>
                            <input 
                             name="product_youtube_id" value={product_youtube_id} onChange={onchange}
                            type="text" required />
                           
                        </div>
                        <div className="labe">
                            <label htmlFor="">Product Key Features<span>*</span></label>
                            <textarea 
                            name="product_keys_features" value={product_keys_features} onChange={onchange}
                            id="" cols="30" rows="10" placeholder="Product highlights"></textarea>
                             {!product_keys_features && (
                            <small style={{ color: "red" }}>{product_keys_featuresErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>

                            {validateformButton() == true ? (
                        <button
                            onClick={validateform}
                            className="labee"
                            >   
                            Save and Continue
                        </button>
                    ) : (
                        <button
                            onClick={() => setValue(3)}
                            className="labee"
                            >
                            Save and Continue
                        </button>
                    )}
                        <div style={{ marginTop: 20, }}>
                            <button className="labeee as" onClick={() => setValue(1)}>Previous</button>
                            <button className="labeee">Save as Draft</button>
                            <button className="labeee">Preview</button>
                        </div>
                    </form>
                </div>
                <div className="cot">
                    <div style={{ width: 80, height: 80 }}>
                        <CircularProgressbar value={50} text={`${percentage}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                textColor: '#000',
                                trailColor: '#4CC5D2',
                                backgroundColor: '#4CC5D2',
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct