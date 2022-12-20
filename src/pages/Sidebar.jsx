import React from 'react'
import SidebarHeader from '../components/vendor/SidebarHeader';
import { Route, Routes, Link  } from 'react-router-dom'
import Getting from '../components/vendor/Auth/Getting';
// import Getting from '../components/GettingStarted/Layout/GeneralLayout'
import Dashboard from '../components/vendor/Dashboard'
import Transaction from '../components/vendor/Transaction'
import CustomerReview from '../components/vendor/CustomerReview'
import Delivery from '../components/vendor/Delivery';
import Orders from '../components/vendor/Orders';
import Settings from '../components/vendor/Settings'
import Product from '../components/vendor/Product';
import Wallet from '../components/vendor/Wallet';
import AddProduct from '../components/vendor/AddProduct/AddProduct';
import '../styles/vendor/Sidebar.css'
import {TbWorld} from 'react-icons/tb'
import Refunds from '../components/vendor/Refund';
import Payouts from '../components/vendor/Payouts';
import MyAccount from '../components/vendor/MyAccount';


const Sidebar = () => {
    return(
        <>
            <SidebarHeader/>
            <div className='side'>
            <div className='push'>
            <ul>
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
                    <Link to="/sidebar/wallet"><p>Wallet</p></Link>
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
            </div>
            <div style={{background: '#F6F8F8'}}>
            <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/getting' element={<Getting/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/customer-review' element={<CustomerReview/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/order' element={<Orders/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
            <Route path='/refunds' element={<Refunds/>}/>
            <Route path='/payout' element={<Payouts/>}/>
            <Route path='/my-account' element={<MyAccount/>}/>
            </Routes>
            </div>
            </div>
        </>
    )
}

export default Sidebar;