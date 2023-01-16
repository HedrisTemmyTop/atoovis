import React from "react";
import '../../styles/BuyerSide/buyer.css'
import {FiEdit2} from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import Modal from 'react-modal';
const Bio =()=>{
 
    return(
        <div className="bow">
            <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <h1>Personal Info</h1>
                </div>
             
            </div>

               <form action="" >
                    <div className="doe">
                    <div className="for">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div className="for">
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                    <div className="for">
                        <label htmlFor="">Gender</label>
                        <input type="text" />
                    </div>
                    <div className="for">
                        <label htmlFor="">Age</label>
                        <input type="number" />
                    </div>
                    <div className="for">
                        <label htmlFor="">Email Address</label>
                        <input type="text" />
                    </div>
                    <div className="for">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" />
                    </div>
                    <div className="for">
                        <label htmlFor="">New Password</label>
                        <input type="text" />
                    </div>
                    <div className="for">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    
                    </div>
                    <div className="forr for">
                        <label htmlFor="">Confirm  New Password</label>
                        <input type="text" />
                    </div>
                   <div className="for">
                   <button >Save Bio</button>
                   </div>
               </form>
            
           
        </div>
    )
}

export default Bio