import React from "react";
import styles from '../../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../styles/vendor/Addproduct.css'
import round from '../../../../src/assets/images/Header/round.png'
import roundTwo from '../../../../src/assets/images/Header/Round-Stepper.png'
import roundThree from '../../../../src/assets/images/Header/Round-Stepper1.png'
import roundFour from '../../../../src/assets/images/Header/Frame 966.png'
import {MdArrowForward} from 'react-icons/md'

const NewProduct =({setValue})=>{
    const percentage = 50;
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
             <BiCategoryAlt/> <p>  / Products / Add Products</p>
            </div>

            <div className="ppr">
                    <div className="cot">
                    <div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(1)}>
                            <img src={roundThree} alt="" width={30}/>
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E'}}>Product Information</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(2)}>
                            <img src={round} alt="" width={30} />
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 800}}>Product Details</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(3)}>
                            <img src={roundTwo} alt="" width={30}/>
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Requirements</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(4)}>
                            <img src={roundTwo} alt="" width={30} />
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Pricing</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(5)}>
                            <img src={roundFour} alt="" width={30}/>
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Images</p>
                            </div>
                        </div>
                    </div>
                    <div className="exist">
                    <div className="nave">
                            <div onClick={()=> setValue(1)} style={{display: 'flex', width: 'auto', marginRight: 5, alignItems: 'center'}}>
                                <h2 >Product Info</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(2)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2 style={{color: '#4CC5D2'}}>Product Details  </h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(3)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2>Product Requirements</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(4)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2>Product Pricing</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(5)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2 >Images</h2>
                            </div>
                        </div>
                        <h1>Create a New Product</h1>
                        <p>Product Details</p>

                             
                             <form action="">
                             <div className="labe">
                                    <label htmlFor="">Product Line*</label>
                                    <select name="" id="" required></select>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Dictum aliquam molestie at neque est. Quam nunc,
                                     donec sagittis diam purus. Est odio lectus volutpat.</p>
                                <div className="labe">
                                    <label htmlFor="">Vendor Type<span>*</span></label>
                                    <input type="text" required/>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. Quam nunc,
                                     donec sagittis diam purus. Est odio lectus volutpat.</p>
                                <div className="labe">
                                    <label htmlFor="">Type</label>
                                    <input type="text" required/>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est.
                                     Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                                <div className="labe">
                                    <label htmlFor="">Main Material</label>
                                    <input type="text" required/>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. 
                                    Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                                    <div className="labe">
                                    <label htmlFor="">Product Description<span>*</span></label>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Product description"></textarea>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. 
                                    Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                                <div className="labe">
                                    <label htmlFor="">YouTube ID</label>
                                    <input type="text" required/>
                                </div>
                                <div className="labe">
                                    <label htmlFor="">Product Key Features<span>*</span></label>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Product highlights"></textarea>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum aliquam molestie at neque est. 
                                    Quam nunc, donec sagittis diam purus. Est odio lectus volutpat.</p>
                                
                                <button className="labee" onClick={()=> setValue(3)}>Save and Continue</button>
                                <div style={{marginTop: 20,}}>
                                <button className="labeee as" onClick={()=> setValue(1)}>Previous</button>
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