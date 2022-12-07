import React from "react";

const SellerDetail =({setValue})=>{
    return(
        <div style={{display: 'flex'}}>
        <div style={{width: 555, height: 'auto', borderRadius:27, background: '#fff', margin: 40, padding: 40, alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Seller Details</h1>
         <form action="">
             <div className="lab">
                 <label htmlFor="">Country</label>
                 <select name="" id="">
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

             <button onClick={()=> setValue(4)} style={{
          color: '#fff',
          width: 495,
          height: 66,
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          }}>Previous</button>
           <button onClick={()=> setValue(5)} style={{background: '#4CC5D2',
          color: '#fff',
          width: 495,
          height: 66,
          borderRadius: 100,
          marginTop: 20
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