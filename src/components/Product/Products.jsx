import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'

const Sales =()=>{
    return(
        <div>
             <div className='cancel'>
                    <button style={{width: 168}} className="thirt">Export</button>
                    <div className='cancell'>
                    <div className='thirty'>
                        <h3>Total Products</h3>
                        <h1>4,229</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Live Products</h3>
                        <h1>250</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Sold Products</h3>
                        <h1>60</h1>
                        <p>Items</p>
                    </div>

                    <div className='thirty'>
                        <h3>Available Products</h3>
                        <h1>50</h1>
                        <p>Items</p>
                    </div>

                   
                    </div>
                    <div className='thirtyy thirty'>
                        <h3>Revenue</h3>
                        <h1>₦992,750</h1>
                        <p>Items</p>
                    </div>
                </div>
            </div>
        
    )
}

export default Sales;