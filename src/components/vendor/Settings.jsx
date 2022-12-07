import React from "react";
import { Route, Routes, Link  } from 'react-router-dom'
import styles from '../../styles/VendorDash/Dashboard.module.css'
import MyProfile from "./Settings/MyProfile";
import ManageUsers from "./Settings/ManageUsers"
import '../../styles/settings/Profile.css'
const Settings = ()=>{
    return (
        <div className="dashboard">
            <div className={styles.topnav}>
                <p> / Settings</p>
            </div>
            <div className="my-profile">
            <Link to="/sidebar/settings" className="link">My Profile</Link>
            <Link to="/sidebar/settings/manage-users" className="link">Manage Users</Link>
            </div>
            <Routes>
            <Route path='/*' element={<MyProfile/>}/>
            <Route path='/manage-users' element={<ManageUsers/>}/>
            </Routes>
        </div>
    )
}

export default Settings;