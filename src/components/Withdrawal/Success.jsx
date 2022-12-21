import React from "react";
import '../../styles/wallet/wallet.css'
import Mark from '../../assets/images/Header/Group 39747.png'
const Success =()=>{
    return(
       <div className="payo" >
         <img src={Mark} alt="" width={300}/>
         <h1>Withdrawal Successful</h1>
         <h2>Your Withdrawal to Century bank has been completed</h2>
       </div>
    )
}

export default Success