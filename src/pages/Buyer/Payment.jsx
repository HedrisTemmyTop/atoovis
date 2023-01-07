import React from "react";
import '../../styles/Buyer/cart.css'
import {GrFormAdd} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdEdit} from 'react-icons/md'
const Payment = ()=>{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
            <div  className='ppsh'>
                <p>Shipping Address</p>
                <div >
                    <div >
                        <h2>Payment Methods</h2>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                            <input type="radio" name="pay"/>
                            <p style={{marginLeft: 16}}>Pay Online</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                            <input type="radio" name="pay"/>
                            <p style={{marginLeft: 16}}>Wallet Pay</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                            <input type="radio" name="pay"/>
                            <p style={{marginLeft: 16}}>Cash on Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrp">
                <p>₦40000</p>
            </div>
        </div>
    )
}

export default Payment