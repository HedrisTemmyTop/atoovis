import React from "react";
import '../../styles/BuyerSide/buyer.css'
const TrackOrder =()=>{
   
    return(
        <div>
            <div  style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
            </div>
            <div className="boww bow">
            <h1>Track my Order</h1>
            <h3>To be able to track your ID you have to input your order ID</h3>
            <div className="order-input">
                <label htmlFor="">Order ID</label>
                <input type="text" placeholder="Enter order ID"/>
            </div>
           
        </div>
        </div>
    )
}

export default TrackOrder