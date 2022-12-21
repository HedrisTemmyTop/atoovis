import React from "react";
import '../../styles/wallet/wallet.css'
const ConfirmWithdrawal =()=>{
    return(
       <div className="payo" >
         <div>
            <div className="conf">
                <h2>Please confirm your details</h2>
                <h3>X</h3>
            </div>
            <div className="conf">
                <h2>Withdrawal Amount</h2>
                <h3>N200,000.00</h3>
            </div>
            <div className="conf">
                <h2>Bank Destination</h2>
                <h3>Century Bank, 6756464564</h3>
            </div>
         </div>
         <div>
            <p style={{background: 'rgba(154, 159, 191, 0.1)', padding: 10,}}>Dear Customer, Kindly confirm that the details inputted
                 are correct before withdrawal as Atoovis will 
                not be liable for the transfer of funds into incorrect bank accounts.</p>
         </div>
         <button>Withdraw N200,000.00</button>
       </div>
    )
}

export default ConfirmWithdrawal