import React from 'react'
import SidebarHeader from '../components/vendor/SidebarHeader';
import { Route, Routes, Link  } from 'react-router-dom'
import Getting from '../components/vendor/Auth/Getting'
import Dashboard from '../components/vendor/Dashboard';
import '../styles/vendor/Sidebar.css'
import {TbWorld} from 'react-icons/tb'


const Sidebar = () => {
    return(
        <>
            <SidebarHeader/>
            <div className='side'>
            <div className='push'>
            <ul>
            <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Collapse Sidebar</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Getting Started</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar/dashboard"><p>Dashboard</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Products</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Orders</p></Link>
                </li>

                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Customer Reviews</p></Link>
                </li>

                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Transactions</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Wallet</p></Link>
                </li>
                <li className='link'>
                <TbWorld/>
                    <Link to="/sidebar"><p>Delivery</p></Link>
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
                    <Link to="/sidebar"><p>Settings</p></Link>
                </li>

              
            </ul>
            </div>
            <div>
            <Routes>
            <Route path='/' element={<Getting/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
            </div>
            </div>
        </>
    )
}

export default Sidebar;