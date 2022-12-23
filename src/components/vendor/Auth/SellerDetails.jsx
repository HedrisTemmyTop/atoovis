import React from "react";
import '../../../styles/auth/lab.css'
import '../../../styles/auth/welcome.css'
const SellerDetail =({setValue})=>{
    return(
        <div style={{display: 'flex'}}>
        <div className="start2" style={{ height: 'auto', borderRadius:27, background: '#fff', alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Seller Details</h1>
         <form action="">
             <div className="lab" >
                 <label htmlFor="">Country</label>
                 <select name="" id="" className="selecct">
                 <option value=""> Select a Country</option>
                 <option value="">Nigeria</option>
                </select>
             </div>
             <div className="lab">
                 <label htmlFor="">Residential Address</label>
                 <input type="text" />
             </div>
             <div className="labb">
                
                 <p>+</p>
                 <p>Add another address</p>
             </div>
             <div className="lab">
                 <label htmlFor="">Official Email Address</label>
                 <input type="text" />
             </div>
             <div className="lab">
                 <label htmlFor="">Mobile Number</label>
                 <input type="number" />
             </div>
             <div className="labb">
                
                 <p>+</p>
                 <p>Add another address</p>
             </div>
            
            <h1 style={{
                color: '#000',
                textAlign: 'left',
                fontSize: 14,
            }}>John Doe</h1>
             <div className="labb">
                
                 <input type="checkbox" />
                 <p>Is a beneficial owner of the business</p>
             </div>
             <div className="labb">
                
                <input type="checkbox" />
                <p> Is a legal representative of the business</p>
            </div>
            
            <div style={{display: 'flex'}}>
            <div className="labb">
                
                <input type="radio" name="owner"/>
                <p>Yes</p>
            </div>
            <div className="labb" style={{marginLeft: 30}}>
               
               <input type="radio" name="owner"/>
               <p> No</p>
           </div>
            </div>

             <button className="startbtn" onClick={()=> setValue(4)} style={{
          color: '#fff',
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          height: 60,
          }}>Previous</button>
           <button onClick={()=> setValue(5)} className="startbtn" style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20,
          height: 60,
          }}>Save and Continue</button>
         </form>
            
         
        </div>

        <div>
          faqs
        </div>
     </div>
    )
}

export default SellerDetail