import React from "react";
import '../../styles/Buyer/cart.css'
import {MdOutlineArrowForwardIos, MdVerifiedUser} from 'react-icons/md'
import {CiLock} from 'react-icons/ci'
import Master from '../../assets/images/Header/Frame 926 (1) 3 (1).png'
import Verve from '../../assets/images/Header/Frame 926 (1) 2 (1).png'
import Visa from '../../assets/images/Header/pngfind 1 (1).png'
import { Link } from "react-router-dom";
const Card = ()=>{
    return(
        <div>
        <div className='cart-summ'>
                <h1>Cart Summary</h1>
                <h2><span>5</span> Items</h2>
            </div>
            <div className='cart-summ'>
                <h3>Subtotal</h3>
                <h4><span>₦</span>54,500</h4>
            </div>
            <div className='cart-summ'>
                <h3>Subtotal</h3>
                <p>Add your delivery
address at checkout
to see delivery charges</p>
            </div>
            <div className='cart-summ'>
                <h3>Total</h3>
                <div>
                <h4><span>₦</span>272,500</h4>
                <h6>Excluding delivery charges</h6>
                </div>
            </div>

            <div>
                <button><Link to='/checkout'>Proceed to Checkout <span>(5)</span></Link></button>
            </div>

            <div className='payy'>
                <h1>Payment Methods</h1>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <p>We accept:</p>
                    <img src={Visa} alt="" />
                    <img src={Master} alt="" />
                    <img src={Verve} alt="" />
                </div>
                <div style={{display: 'flex', alignItems: 'center', fontSize: 12}}>
                    <CiLock/>
                    <p>Transactions are 100% Safe and Secure</p>
                </div>
            </div>

            <div className='buyy'>
                 <h1>Payment Methods</h1>
                 <div style={{display: 'flex', alignItems: 'center', fontSize: 12}}>
                    <MdVerifiedUser style={{color: '#4CC5D2'}}/>
                    <p>Get full refund if the item is not described or if is not delivered</p>
                </div>
                <div>
                    <p>Returns are made easy, Free return within 10days for official store items and 7 dyas for other eligible items see more...</p>
                </div>
            </div>
        </div>
    )
}

export default Card