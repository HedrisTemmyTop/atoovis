import React from "react";
import Header from "../components/Header";
import '../styles/BuyerSide/buyer.css'
import {AiOutlineHeart} from 'react-icons/ai'
import { Route, Routes, Link  } from 'react-router-dom'
import Delivery from "../components/BuyerSide/Delivery";
import Bio from "../components/BuyerSide/Bio";
import WishList from "../components/BuyerSide/WishList";
import Wallet from "../components/BuyerSide/Wallet";
import PrivacyPolicy from '../components/BuyerSide/PrivacyPolicy'
import TrackOrder from "../components/BuyerSide/TrackOrder";
const BuyerSidebar =()=>{
    return(
        <div>
            <Header/>
            <section className="buyer-side">
              <div style={{display: 'flex', marginBottom: 35}}>
                <p style={{color: '#1B5958', fontSize: 14, paddingRight: 10}}>Home</p>
                <p style={{color: '#1B5958', fontSize: 14, paddingLeft: 10}}>My Orders</p>
              </div>

              <div className="prof">
                    <div>
                    <div>
                        <h1>Profile</h1>
                        <div className="col">
                            <ul>
                               <Link to=''>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Categories</p>
                                </li></Link>

                                <Link to='/buyer'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>My Bio</p>
                                </li></Link>
                                <Link to='/buyer/delivery'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Delivery Address</p>
                                </li></Link>

                                <Link to='/buyer/wishlist'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Favourite</p>
                                </li></Link>
                                <Link to=''>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>My Orders</p>
                                </li></Link>

                                <Link to='/buyer/wallet'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>My Wallet</p>
                                </li></Link>
                                <Link to='/buyer/track'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Track My Order</p>
                                </li></Link>

                                <Link to=''>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Settings</p>
                                </li></Link>
                               
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h1 style={{marginTop: 30}}>Legal</h1>
                        <div className="col">
                            <ul>
                               <Link to='/buyer /privacy'>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Privacy Policy</p>
                                </li></Link>

                                <Link to=''>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Terms & Conditions</p>
                                </li></Link>
                                <Link to=''>
                               <li>
                                    <AiOutlineHeart/>
                                    <p>Atoovis Help Center</p>
                                </li></Link>

                              

                               
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button className="invite">Invite Friends</button> 
                        <button className="logout">Logout</button>
                    </div>
                    </div>
                
                <div> 
                    <Routes>
                        <Route path="/" element={<Bio/>}/>
                        <Route path="/delivery" element={<Delivery/>}/>
                        <Route path="/wishlist" element={<WishList/>}/>
                        <Route path="/wallet/*" element={<Wallet/>}/>
                        <Route path="/privacy" element={<PrivacyPolicy/>}/>
                        <Route path="/track" element={<TrackOrder/>}/>
                    </Routes>
                </div>
                </div>
            </section>
        </div>
    )
}

export default BuyerSidebar