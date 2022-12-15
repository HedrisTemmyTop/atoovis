import React, {useState} from "react";
import logo from "../../assets/images/Header/Atoovislogo-white 2.png"
import profile from '../../assets/images/Header/Mask Copy.png'
import '../../styles/vendor/SidebarHead.css'
import {TbWorld} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgMenuLeft} from 'react-icons/cg'
import {IoMdNotificationsOutline} from 'react-icons/io'
import { Route, Routes, Link  } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Transaction from './Transaction'
import CustomerReview from './CustomerReview'
import Delivery from './Delivery';
import Orders from './Orders';
import Settings from './Settings'
import Product from './Product';
import Getting from './Auth/Getting'
import {AiOutlineDown} from 'react-icons/ai'
const SidebarHeader = () =>{

    const [navbarOpen, setNavbarOpen] = useState(false)
        const handleToggle = () => {
            setNavbarOpen(!navbarOpen)
        }
        const closeMenu = () => {
            setNavbarOpen(false)
          }
    return(
        
          
        <div>
            <div className="side-head">
            <div className="atoovis">
            <img src={logo} alt="" />
            </div>
            <div>
                <div  className="box">
                    <div className='linker'>
                        <TbWorld/>
                        <p>Getting Started</p>
                    </div>
                    <div>
                        <div className="see">
                            <AiOutlineSearch width={20} height={40}/>
                            <input type="text" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* mobile  */}
        <div className="mob-ile">
            <div style={{display: 'flex', alignItems: 'center'}}>
               
                <button onClick={handleToggle}>
                    {/* {navbarOpen ? "Close" : "Open"} */}
                    <CgMenuLeft style={{width: 24, height: 20, fontWeight: 800}}/>
                </button>
                   
                <div>
                    <img src={logo} alt="" width={82} height={20} style={{marginTop: -18}}/>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                    <IoMdNotificationsOutline style={{width: 24, height: 20, fontWeight: 800}}/>
                </div>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <div className="rec">
                        <div style={{display:'flex',}}>
                            <img src={profile} alt="" />
                            <div style={{paddingLeft: 5}}>
                                <h2>John Doe</h2>
                                <p>John Doe Stores</p>
                            </div>
                        </div>
                        <div>
                            <AiOutlineDown/>
                        </div>
                    </div>
                <ul  onClick={closeMenu}>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar" activeStyle={{ color: 'red' }}><p>Collapse Sidebar</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/getting" activeStyle={{ color: 'red' }}><p>Getting Started</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Dashboard</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/product"><p>Products</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/order"><p>Orders</p></Link>
                </li>

                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/customer-review"><p>Customer Reviews</p></Link>
                </li>

                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/transaction"><p>Transactions</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Wallet</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/delivery"><p>Delivery</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Support</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Reports</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/settings"><p>Settings</p></Link>
                </li>

                </ul>

                <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/getting' element={<Getting/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/customer-review' element={<CustomerReview/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/order' element={<Orders/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
            </Routes>
            </div>
        </div>
        </div>
    )
}

export default SidebarHeader