import React from "react";
import logo from "../assets/images/Header/Atoovislogo-white 2.png"
import logo2 from "../assets/images/Header/Atoovislogo.png"
import search from "../assets/images/Header/search.png"
import account from "../assets/images/Header/account.png"
import notify from "../assets/images/Header/notifications 2.png"
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
        <div className="mobile2">
        <div style={{marginBottom: 20}}>
            <img src={logo2}/>
            </div>
            <div className="midd">
                <div className="search">
                <img src={search} alt="" />
                <input type="text" placeholder="Search Products"/>
                </div>
                
                <div className="icons">
                <div className="icon"> <BiCart style={{width: 30, height: 40, color: '#1B5958'}}/></div>
                    <div className="icon"> <img src={notify} alt="" width={30} height={30}/></div>
                    
                </div>
            </div>
        </div>

     
       </div>
    )
}

export default VendorHeader;