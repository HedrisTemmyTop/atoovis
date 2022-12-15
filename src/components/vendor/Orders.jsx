import React from 'react'
import styles from '../../styles/VendorDash/Dashboard.module.css'
import Order from '../../components/Orders/Order'
import '../../styles/VendorDash/Order.css'
const Orders = () =>{
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
                <p> / Orders</p>
            </div>

            <div className='print'>
                <div>
                    <div>
                    </div>
                    <div></div>
                </div>
                <div style={{width: '80%'}}>
                    <Order/>
                </div>

                <div className='cancel'>
                    <button>Print Return Form</button>
                    <div className='cancell'>
                    <div className='thirty'>
                        <h3>New Order</h3>
                        <h1>30</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Completed Orders</h3>
                        <h1>161</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Pending Orders</h3>
                        <h1>8</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Returned Orders</h3>
                        <h1>10</h1>
                        <p>Items</p>
                    </div>

                   
                    </div>
                    <div className='thirtyy thirty'>
                        <h3>Total Orders</h3>
                        <h1>300</h1>
                        <p>Items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;