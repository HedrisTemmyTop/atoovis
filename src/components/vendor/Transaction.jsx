import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import Transactions from "../Transaction/RealTransaction";

const Transaction =()=>{
    return(
        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <p> / Transaction</p>
            </div>
            <div className={styles.moll}>
                        <h1 >Transaction</h1>
                        <button style={{width: 168}} className={styles.thir}>Export</button>
                    </div>
            
            <div className={styles.content}>
              
                <div className={styles.trans}>

                <div className={styles.inn}>
                    <p>In Escrow</p>
                    <h1>₦0</h1>
                    <h4>Amount</h4>
                </div>
                <div className={styles.inn}>
                    <p>Paid</p>
                    <h1>₦992,750</h1>
                    <h4>Last paid: 22/09/2022</h4>
                </div>
              
               <div className="thirt">
               <div className={styles.inn}>
                    <p>Pending Orders</p>
                    <h1>₦992,750</h1>
                    <h4>All Time</h4>
                </div>
               </div>
              
            </div>
            <div>
               <div className={styles.ini}>
                    <p>Pending Orders</p>
                    <h1>₦992,750</h1>
                    <h4>All Time</h4>
                </div>
               </div>
               

               
            </div>
            
                   <div>
                    
                    <div>
<Transactions/>
                    </div>
                   </div>
        </div>
    )
}

export default Transaction;