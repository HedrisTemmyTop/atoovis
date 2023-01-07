import React from "react";
import {BsCreditCard2Back} from 'react-icons/bs'
import { Route, Routes, Link } from 'react-router-dom'
import BankTransfer from "./BankTransfer";
import PayCard from "./PayCard";
import PayBank from "./BankPay";
import Ussd from "./Ussd";
import UssdCode from "./UssdCode";
import '../../styles/Buyer/Payment.css'
import logo from '../../assets/images/Header/Atoovislogo.png'
import paytack from '../../assets/images/Header/paysta.png'
import {AiOutlineLock} from 'react-icons/ai'
const RealPayment =()=>{
    return(
        <div style={{display: 'flex'}}>
            <div className="atov">
                <div className="paytop">
                    <img src={logo} alt="" />
                    <div >
                        <h4>Order ID: <span>5B49a047188af5</span></h4>
                        <h4>Description: <span>Payment for delivery</span></h4>  
                        <h4>Pay: <span>N273,000.00</span></h4>  
                       
                    </div>
                </div>
                <div className="atovv">
                <Routes>
                            <Route path="/" element={<PayCard/>}/>
                            <Route path="/bank-transfer" element={<BankTransfer/>}/>
                            <Route path="/ussd" element={<Ussd/>}/>
                            <Route path="/paybank" element={<PayBank/>}/>
                            <Route path="/ussd-code" element={<UssdCode/>}/>
                        </Routes>
                        <div className="hod">
            <button>Change Payment Method</button>
            <button>Cancel payment</button>
        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                        <AiOutlineLock/>
                            <p style={{color: '#9A9FBF', paddingRight: 5, paddingLeft: 5}}>Secured by </p>
                            <img src={paytack} alt="" />
                        </div>
                </div>
            </div>
            <div className="paym">
                <h3>Payment Methods</h3>
                <Link to='/order'>
                <div className="met">
                    <BsCreditCard2Back />
                    <p>Pay with Card</p>
                </div>
                </Link>
                <Link to='bank-transfer'>
                <div className="met">
                    <BsCreditCard2Back />
                    <p>Pay with Bank Transfer</p>
                </div>
                </Link>
                <Link to='ussd'>
                <div className="met">
                    <BsCreditCard2Back />
                    <p>Pay with USSD</p>
                </div>
                </Link>
                <Link to='paybank'>
                <div className="met">
                    <BsCreditCard2Back />
                    <p>Pay with Bank</p>
                </div>
                </Link>
            </div>
            
        </div>
    )
}

export default RealPayment