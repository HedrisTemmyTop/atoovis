import React from "react";
import '../../styles/BuyerSide/buyer.css'
import wish from '../../assets/images/Header/Mask Group.png'
import { Route, Routes, Link  } from 'react-router-dom'
import BankAccount from "./BankAccount";
import WalletHistory from "./WalletHistory";
const Wallet =()=>{
   
    return(
        <div>
            <div  >
                <div>
                <h1>My Wallet</h1>
                </div>
                <div>
                <Link to='/buyer/wallet'><button>Bank Account</button></Link>
                <Link to='/buyer/wallet/history'><button>Wallet History</button></Link>
                </div>
            </div>

            <div className="bow">
                <Routes>
                    <Route path="/" element={<BankAccount/>}/>
                    <Route path="/history" element={<WalletHistory/>}/>
                </Routes>
            </div>
            
        </div>
    )
}

export default Wallet