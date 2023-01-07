import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import {MdOutlineArrowForwardIos, MdVerifiedUser} from 'react-icons/md'
import '../../styles/Buyer/cart.css'
import CheckoutCard from './CheckoutCard'
import Items from './Items'
import Address from './Address'
import Delivery from './Delivery'
import Payment from './Payment'
import MoreProducts from '../../components/MoreProducts'

const Checkout =()=> {
    return (
        <div>
            <Header/>
            <div className='cart'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Link to='/' style={{color: '#061F1E', fontSize: 14, fontWeight: 400}}>Home</Link>
                    <MdOutlineArrowForwardIos/>
                    <p style={{color: '#1B5958', fontSize: 14, fontWeight: 700}}>Shipping Address</p>

                </div>
                <div>
                        <h1 style={{textAlign: 'left', marginTop: 20, fontSize: 24, fontWeight: 700, color: '#000'}}>My Shopping Cart</h1>
                    </div>
                <div className='sellect'>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                        <input type="checkbox" name="" id="" />
                        <p style={{fontSize: 24, paddingLeft: 10, fontWeight: 700}}>Select all items <span>(4)</span></p>
                    </div>
                   
                    <div className='cartt'>
                        <div className='cart-left'>
                            <div className='item-cartt'>
                           <Address/>
                            </div>
                            <div className='item-cartt' style={{height:585}}>
                           <Delivery/>
                            </div>
                            <div className='item-cartt' style={{height:255}}>
                           <Payment/>
                            </div>
                            <div className='item-cart'>
                            <Items/>
                            </div> <div className='item-cart'>
                            <Items/>
                            </div>
                        </div>
                        <div className='cart-right'>
                      <CheckoutCard/>
                        </div>
                    </div>
                </div>

            </div>
        <div>
            <MoreProducts/>
        </div>
        </div>
    )
}

export default Checkout