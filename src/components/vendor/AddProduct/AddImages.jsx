import React from "react";
import styles from '../../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../styles/vendor/Addproduct.css'
import roundThree from '../../../../src/assets/images/Header/Round-Stepper1.png'
import roundFour from '../../../../src/assets/images/Header/Frame 966.png'
import upload from '../../../../src/assets/images/Header/cil_cloud-upload.png'
import '../../../styles/vendor/Addproduct.css'
import {MdArrowForward} from 'react-icons/md'
const AddImages =({setValue, props})=> {
        const hiddenFileInput = React.useRef(null);
        const handleClick = event => {
          hiddenFileInput.current.click();
        };
        
        const handleChange = event => {
          const fileUploaded = event.target.files[0];
          props.handleFile(fileUploaded);
        };
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
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Information</p>
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
                            <img src={roundThree} alt="" width={30} />
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 600, color: '#757E7E',}}>Product Pricing</p>
                            </div>
                            <div style={{display: 'flex'}} onClick={()=> setValue(5)}>
                            <img src={roundFour} alt="" width={30}/>
                            <p style={{paddingLeft: 10, paddingTop: 5, fontSize: 16, fontWeight: 800 }}>Images</p>
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
                                <h2 style={{width: 200}}>Product Requirements</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(4)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2>Product Pricing</h2>
                                <MdArrowForward/>
                            </div>
                            <div onClick={()=> setValue(5)} style={{display: 'flex', width: 150, marginRight: 5, alignItems: 'center'}}>
                                <h2 style={{color: '#4CC5D2'}}>Images</h2>
                            </div>
                        </div>
                        <div className="cir">
                        <div>
                        <h1>Create a New Product</h1>
                        <h4>Add Images</h4>
                        </div>
                        <div style={{ width: 40, height: 40 }} className="circ">
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
                        <p>Image sizes should be a minimuim of 240 Pixels
                             by 240 Pixels and maximum of 2400 Pixels by 2400 Pixelss</p>

                                    <div className="opl">
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                            <p>Product Main Image<span>*</span></p>
                                        </div>

                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                        <div className="upl" >
                                            {/* <input type="file" name="" id="" /> */}
                                     
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Delete Image</option>
                                            </select>
                                            <img src={upload} alt="" onClick={handleClick}/>
                                        </div>
                                    </div>
                           
                             <div>
                                    <button className="cont" onClick={()=> setValue(5)}>Finish and Sumit</button>
                                <div style={{marginTop: 20, display: 'flex', justifyContent: 'space-between'}} className="waw">
                                <button className="contt as" onClick={()=> setValue(3)}>Previous</button>
                                <button className="contt">Save as Draft</button>
                                <button className="contt">Preview</button>  
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
        </div>
    )
}

export default AddImages