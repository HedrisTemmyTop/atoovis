import React from "react";
import '../../../styles/settings/Profile.css'
import General from "./General";
import Shipping from './Shipping'
import Terms from "./Terms";
import Payment from "./Payment";
import Commission from "./Commission";
import { Route, Routes, Link  } from 'react-router-dom'
const MyProfile =()=>{
    return(
        <div className="lato">
             
            <div className="gen">
                <ul>
                    <li><Link to='/sidebar/settings'>General</Link></li>
                    <li><Link to="/sidebar/settings/terms">Terms & Conditions</Link></li>
                    <li><Link to='/sidebar/settings/commission'>Commission & Fees</Link></li>
                    <li><Link to='/sidebar/settings/shipping'>Shipping</Link></li>
                    <li><Link to='/sidebar/settings/payment'>Payment Methods</Link></li>
                </ul>
            </div>

            <div>
            <Routes>
            <Route path='/' element={<General/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/commission' element={<Commission/>}/>
            <Route path='/shipping' element={<Shipping/>}/>
            <Route path='/payment' element={<Payment/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default MyProfile