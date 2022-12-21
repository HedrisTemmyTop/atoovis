import React from "react";
import '../../styles/wallet/wallet.css'
const MakeWithdrawal =()=>{
    return(
       <div className="payo" >
         <h1>Payout</h1>
         <p>Please use the form below to make withdrawals</p>
         <form action="">
            <div className="make">
                <label htmlFor="">Enter Withdrawal Amount</label>
                <input type="text" name="" id="" />
            </div>
            <div className="make">
                <label htmlFor="">Select Bank Destination</label>
                <select name="" id="">
                    <option value="">enter bank destination</option>
                </select>
            </div>

            <button>Withdraw N200,000.00</button>
         </form>
       </div>
    )
}

export default MakeWithdrawal