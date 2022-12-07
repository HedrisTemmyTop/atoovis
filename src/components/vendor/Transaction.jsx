import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import Transactions from "../Transaction/RealTransaction";

const Transaction =()=>{
    return(
        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <p> / Transaction</p>
            </div>
            <div className={styles.content}>
              
                <div className={styles.trans}>
                <div className={styles.inn}>
                    <p>In Escrow</p>
                    <h1>9,408</h1>
                    <h4>Items</h4>
                </div>
                <div className={styles.inn}>
                    <p>Paid</p>
                    <h1>1,004</h1>
                    <h4>Items</h4>
                </div>
                <div className={styles.inn}>
                    <p>Pending Orders</p>
                    <h1>873</h1>
                    <h4>Items</h4>
                </div>
              
            </div>
               

                <div>
                  
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