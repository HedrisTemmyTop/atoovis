import React from "react";
import logo from "../assets/images/Header/Atoovislogo-white 2.png"
import logo2 from "../assets/images/Header/Atoovislogo.png"
import {CgMenuLeft} from "react-icons/cg"
import Modal from 'react-modal';
import '../styles/header.css'
import {BiCart} from 'react-icons/bi'
const VendorHeader = () => {

   
    return (
       <div>
         <div className="header">
            <div >
            <img src={logo}/>
            </div>
          
            <div className="left">
                <div style={{display: 'flex', alignItems: 'center', marginRight: 30}}>
                    <p>How it works</p>
                    <p>Pricing</p>
                    <p>Categories</p>
                    <p>FAQs</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className="btss">Start Selling</button>
                </div>
            </div>
        </div>
        <div className="mobile3">
        <div style={{marginBottom: 20}}>
            <img src={logo}/>
            
        </div>
           
            <div >
            <CgMenuLeft style={{color: '#fff', width: 20, height:30, fontWeight: 800 }}/>
            </div>
        </div>

     
       </div>
    )
}

export default VendorHeader;