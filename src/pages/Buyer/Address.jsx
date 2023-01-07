import React from "react";
import '../../styles/Buyer/cart.css'
import {GrFormAdd} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdEdit} from 'react-icons/md'
const Address = ()=>{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
            <div  className='ppsh'>
                <p>Shipping Address</p>
                <div style={{display: 'flex'}}>
                    <input type="checkbox" />
                    <div style={{marginLeft: 10}}>
                        <h2>Doshia Zamani</h2>
                        <h3>63 Adekunle Fajuyi Way Ikeja GRA, Lagos, Nigeria</h3>
                    </div>
                </div>
            </div>
            <div className="wrr">
                <div style={{display: 'flex', color: '#4CC5D2'}}>
                    <GrFormAdd style={{color: '#4CC5D2'}}/>
                    <p style={{marginLeft: 10}}>Add New Address</p>
                </div>
                <div style={{display: 'flex', color: '#4CC5D2'}}>
                    <MdEdit style={{color: '#4CC5D2'}}/>
                    <p style={{marginLeft: 10}}>Edit</p>
                </div>
                <div style={{display: 'flex', color: '#CB444A'}}>
                    <RiDeleteBin6Line style={{color: '#CB444A2'}}/>
                    <p style={{marginLeft: 10}}>Remove</p>
                </div>
            </div>
        </div>
    )
}

export default Address