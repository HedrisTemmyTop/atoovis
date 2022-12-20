import React, {useState} from "react";
import styles from '../../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../styles/vendor/Addproduct.css'
import round from '../../../../src/assets/images/Header/round.png'
import roundThree from '../../../../src/assets/images/Header/Round-Stepper1.png'
import roundFour from '../../../../src/assets/images/Header/Frame 966.png'
import Table from "./Table";
import {MdArrowForward} from 'react-icons/md'
import Modal from 'react-modal';

const ProductPricing =({setValue})=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
        padding: 0,
          bottom: 'auto',
          borderRadius: 50,
          marginRight: '-50%',
         
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
    const percentage = 87.5;
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
                            <img src={roundThree} alt="" width={30} />
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Details</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(3)}>
                            <img src={roundThree} alt="" width={30}/>
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Requirements</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(4)}>
                            <img src={round} alt="" width={30} />
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 800, }}>Product Pricing</p>
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
                                <h2>Product Details  </h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(3)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2>Product Requirements</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(4)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2 style={{color: '#4CC5D2'}}>Product Pricing</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(5)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2 >Images</h2>
                            </div>
                        </div>
                        <h1>Create a New Product</h1>
                        <p>Product Pricing</p>

                             
                            <div style={{width: 892}}>
                                <Table/>
                                <button onClick={openModal} style={{width: 'auto'}}>Add Another Product Variation </button>
                                <div>
                                    <button className="cont" onClick={()=> setValue(5)}>Save and Continue</button>
                                <div style={{marginTop: 20, display: 'flex', justifyContent: 'space-between'}} className='waw'>
                                <button className="contt as" onClick={()=> setValue(3)}>Previous</button>
                                <button className="contt">Save as Draft</button>
                                <button className="contt">Preview</button>  
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="cot">
                    <div style={{ width: 80, height: 80 }}>
  <CircularProgressbar value={87.5} text={`${percentage}%`}
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
            <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
        <div className="neww model">
                <h1 style={{textAlign: 'left', fontSize: 24, color: '#000', paddingLeft: 30, paddingTop: 20}}>Add Variation</h1>
                    <form action="">
                        <div className="addv">
                            <label htmlFor="">Size</label>
                            <select name="" id="">
                                <option value="">Select Size</option>
                            </select>
                        </div>
                        <div className="addv">
                            <label htmlFor="">Seller SKU</label>
                            <input type="text" placeholder="enter Seller SKU"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">EAN/UPC/ISBN</label>
                            <input type="text" placeholder="enter EAN/UPC/ISBN"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">Quantity</label>
                            <input type="text" placeholder="Enter Quantity"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">Price</label>
                            <input type="text" placeholder="Enter Price"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">Sale Price</label>
                            <input type="text" placeholder="Enter Sale Price"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">Start Date</label>
                            <input type="text" placeholder="Enter start date"/>
                        </div>
                        <div className="addv">
                            <label htmlFor="">End Date</label>
                            <input type="text" placeholder="Enter end date"/>
                        </div>
                        <button className="startbtn"  style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 10,
          height: 60,
          marginBottom: 20,
          }}>Add Variation</button>
                    </form>
                    
        </div>
     
      </Modal>
        </div>
    )
}

export default ProductPricing