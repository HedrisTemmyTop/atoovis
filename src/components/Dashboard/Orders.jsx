import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'

const Orders = ()=> {
    return(
        <div>
            <div className={styles.order}>
                <div className={styles.inn}>
                    <p>Products Sold</p>
                    <h1>9,408</h1>
                    <h4>Items</h4>
                </div>
                <div className={styles.inn}>
                    <p>Incomplete Orders</p>
                    <h1>1,004</h1>
                    <h4>Items</h4>
                </div>
                <div className={styles.inn}>
                    <p>Pending Orders</p>
                    <h1>873</h1>
                    <h4>Items</h4>
                </div>
                <div className={styles.inn}>
                    <p>Cancelled Orders</p>
                    <h1>1,161</h1>
                    <h4>Items</h4>
                </div>
            </div>
        </div>
    )
}

export default Orders;