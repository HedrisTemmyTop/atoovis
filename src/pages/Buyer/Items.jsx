import React from "react";
import One from '../../assets/images/Header/Mask group.png'
import '../../styles/Buyer/cart.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiFillHeart} from 'react-icons/ai'
const Items= ()=>{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex',}}>
                <div>
                    <input type="checkbox" />
                </div>
                <div style={{marginLeft: 10}}>
                    <img src={One} alt="" />
                </div>
                <div className="sun">
                    <h1>Sunlight Dishwashing Liquid Green 400ml</h1>
                    <h2>KYC Stores</h2>
                    <div className="pprr">
                        <h3>₦54,500</h3>
                        <h4>₦61,000</h4>
                        <h5>-41%</h5>
                    </div>
                </div>
            </div>


            <div className="ree">
                <div style={{display: 'flex',}}>
                    <AiFillHeart style={{color: '#D0D1D1',  marginRight: 20, height:30, width: 40}}/>
                    <div style={{display: 'flex'}}>
                        <RiDeleteBin6Line style={{color: '#4CC5D2', height: 20, width:16}}/>
                    <p>Remove</p>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                    <div className="rap">+</div>
                    <div style={{padding: 5}}><p>1</p></div>
                    <div className="rap">-</div>
                </div>
            </div>
        </div>
    )
}

export default Items