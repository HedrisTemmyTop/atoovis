import React from "react";
import '../../../styles/auth/lab.css'
import map from'../../../assets/images/Header/Rectangle 9117.png'
import {MdLocationPin} from 'react-icons/md'
import '../../../styles/auth/welcome.css'
const BusinessDetail =({setValue})=>{
    return(
        <div>
           <div className="start2" style={{ height: 'auto', background: '#fff', alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
           <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Business Details</h1>
            <form action="">
                <div className="lab">
                    <label htmlFor="">Business Name</label>
                    <input type="text" />
                </div>
                <div className="lab">
                    <label htmlFor="">Business Type</label>
                    <input type="text" />
                </div>
                <div className="labb">
                   
                    <input type="checkbox" />
                    <p>I confirm my business location and type are correct,
                     and I understand that this information cannot be changed later</p>
                </div>
                <div className="lab">
                    <label htmlFor="">CAC Registration Number</label>
                    <input type="text" />
                </div>
                <div className="lab" style={{marginLeft: -20,}}>
                    <label htmlFor="">State / Region</label>
                   <select name="" id="">
                    <option value=""></option>
                    <option value="">Federal Capital Territory</option>
                   </select>
                </div>
                <div className="lab" style={{marginLeft: -20,}}>
                    <label htmlFor="">LGA</label>
                   <select name="" id="">
                    <option value=""></option>
                    <option value="">Gwagwalada</option>
                   </select>
                </div>
                <div className="labbb">
                    <div>
                    <label htmlFor="">Business Address</label>
                    <input type="text" />
                    </div>
                    <div className="ic">
                        <MdLocationPin style={{color: '#1B5958'}}/>
                    </div>
                </div>
                <div>
                    <img src={map} alt="" />
                </div>
                <div className="labb">
                   
                    <input type="checkbox" />
                    <p>I confirm my business address is correct, and I understand that this
                         information cannot be changed till address verification is completed</p>
                </div>
                <div className="lab">
                    <label htmlFor="">Business Email</label>
                    <input type="email" />
                </div>

                <button onClick={()=> setValue(4)} style={{background: '#4CC5D2',
             color: '#fff',
             borderRadius: 100,
             marginTop: 20,
             marginLeft: -20,
             }}
             className="startbtn"
             >Save and Continue</button>
            </form>
               
            
           </div>
        </div>
    )
}

export default BusinessDetail