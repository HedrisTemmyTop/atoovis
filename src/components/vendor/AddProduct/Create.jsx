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


const Create = ({ setValue, InputData, onchange }) => {
    const { product_category, product_name, product_brand, product_model, product_color } = InputData
    const [pcategoryErr, setcategpryErr] = useState("");
    const [pnameErr, setpnameErr] = useState("");
    const [pbrandErr, setpbrandErr] = useState("");
    const [pmodelErr, setpmodelErr] = useState("");
    const [pcolorErr, setpcolorErr] = useState("");

    const validateform = () => {
        if (!product_category) {
            setcategpryErr("Product Category is required");
        } else if (!product_name) {
            setpnameErr("Product name is required");
        } else if (!product_brand) {
            setpbrandErr("Product brand is required");
        }
        else if (!product_model) {
            setpmodelErr("Product Model is required");
        } 
        else if (!product_color) {
            setpcolorErr("Product color is required");
        }
        else {
          setValue(2);
          // console.log("ffff");
        }
      };
    const validateformButton = () => {
        if (
        product_category &&
        product_name &&
        product_brand &&
        product_model &&
        product_color
        ) {
          return false;
        }
        else{
          return true;
        }
      };

     

    const percentage = 25;
    return (

        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <BiCategoryAlt /> <p>  / Products / Add Products</p>
            </div>

            <div className="ppr">
                <div className="cot">
                    <div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(1)}>
                            <img src={round} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 800 }}>Product Information</p>
                        </div>
                        <div style={{ display: 'flex' }} onClick={() => setValue(2)}>
                            <img src={roundTwo} alt="" width={30} />
                            <p style={{ paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E', }}>Product Details</p>
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
                            <h2 style={{ color: '#4CC5D2' }}>Product Info</h2>
                            <MdArrowForward />
                        </div>
                        <div onClick={() => setValue(2)} style={{ display: 'flex', width: 150, marginRight: 5, alignItems: 'center' }}>
                            <h2>Product Details  </h2>
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
                    <p>The product you are adding may already exist at Atoovis,
                        Search our catalog for the product you want to sell and
                        save yourself some time</p>

                    <h4>Find it on Atoovis</h4>
                    <div className="ssr">
                        <div style={{ display: 'flex' }}>
                            <AiOutlineSearch className='sss' />
                            <input type="text" name="" id="" placeholder="Enter product name, EAN, ISBN " />
                            
                        </div>
                        <p className="ses">Search</p>
                    </div>
                    <h5>If it is not in Atoovis’s Catalog: Continue to Create a Product</h5>
                    <form action="">
                        <div className="labe">
                            <label htmlFor="">Category*</label>
                            <select name="product_category" id="" required className="sell" onChange={onchange} >
                                <option value="">Select Category</option>
                                <option value="gadgets">Gadgets</option>

                            </select>
                            {!product_category && (
                            <small style={{ color: "red" }}>{pcategoryErr}</small>
                             )}
                        </div>
                        <div className="labe">
                            <label htmlFor="">Name of Product*</label>
                            <input type="text" name="product_name" value={product_name} onChange={onchange} required />
                            {!product_name && (
                            <small style={{ color: "red" }}>{pnameErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. Quam nunc,
                            donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Brand of Product</label>
                            <input type="text" name="product_brand" value={product_brand} onChange={onchange} required />
                            {!product_brand && (
                            <small style={{ color: "red" }}>{pbrandErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Model of Product</label>
                            <input type="text" name="product_model" value={product_model} onChange={onchange} required />
                            {!product_model && (
                            <small style={{ color: "red" }}>{pmodelErr}</small>
                             )}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                            Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                        <div className="labe">
                            <label htmlFor="">Color</label>
                            <input type="text" name="product_color" value={product_color} onChange={onchange} required />
                            {!product_color && (
                            <small style={{ color: "red" }}>{pcolorErr}</small>
                             )}
                        </div>
                        {validateformButton() == true ? (
                        <button
                            onClick={validateform}
                            className="labee"
                            >   
                            Save and Continue
                        </button>
                    ) : (
                        <button
                            onClick={() => setValue(2)}
                            className="labee"
                            >
                            Save and Continue
                        </button>
                    )}
                        <div style={{ marginTop: 20, }}>
                            <button className="labeee as">Previous</button>
                            <button className="labeee ">Save as Draft</button>
                            <button className="labeee">Preview</button>
                        </div>
                    </form>
                </div>
                <div className="cot">
                    <div style={{ width: 80, height: 80 }}>
                        <CircularProgressbar value={25} text={`${percentage}%`}
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

export default Create