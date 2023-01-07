import React from "react";
import '../../styles/Buyer/cart.css'
const OrderAddress = ()=>{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
            <div  className='ppsh'>
                <p>Shipping Address</p>
                <div style={{display: 'flex'}}>
                    <input type="radio" />
                    <div style={{marginLeft: 10}}>
                        <h2>Doshia Zamani</h2>
                        <h3>63 Adekunle Fajuyi Way Ikeja GRA, Lagos, Nigeria</h3>
                    </div>
                </div>
            </div>
            <div className="wrr">
                <div style={{display: 'flex', color: '#4CC5D2'}}>
                    <p style={{marginLeft: 10}}>Change</p>
                </div>
              
            </div>
        </div>
    )
}

export default OrderAddress