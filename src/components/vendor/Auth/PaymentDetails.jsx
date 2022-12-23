import React from "react";

const PaymentDetail =({setValue})=>{
    return(
        <div style={{display: 'flex', }}>
        <div className="start" style={{padding: 40, height: 'auto',  background: '#fff', display: 'flex', flexDirection: 'column', }}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Payment Details</h1>
         <form action="">
         <div className="lab" >
                 <label htmlFor="">Account  Name</label>
                 <input type="text" />
             </div>
             <div className="lab"  >
                 <label htmlFor="">Account Number</label>
                 <input type="text" />
             </div>
             <div className="lab" >
                 <label htmlFor="">Bank </label>
                 <select name="" id="" className="selecct">
                 <option value="">Select Bank</option>
                 <option value="">Nigeria</option>
                </select>
             </div>
             <div className="lab">
                 <label htmlFor="">Payout Frequency </label>
                 <select name="" id="" className="selecct">
                 <option value="">Select a payout period</option>
                 <option value="">Nigeria</option>
                </select>
             </div>
            
             <div className="lab">
                
                 <h1 style={{fontSize: 20, fontWeight:700, color: '#000', textAlign: 'left'}}>Credit Card details</h1>
                 <p style={{fontSize: 14, fontWeight:500, color: '#000', textAlign: 'left'}}>A valid Credit Card Number which will be used to pay your monthly fee</p>
             </div>
             <div className="lab" >
                 <label htmlFor="">Card Number</label>
                 <input type="text" />
             </div>
            
            
                    
            
            <div style={{display: 'flex'}} className="leff">
            <div className="laby">
                 <label htmlFor="">Expiry Date</label>
                 <input type="text" />
             </div>
             <div className="laby" style={{marginLeft: 20}}>
                 <label htmlFor="">CVV</label>
                 <input type="text" />
             </div>
            </div>

             <div className="leff">
             <button className="startbtn" onClick={()=> setValue(5)} style={{
          color: '#fff',
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          height: 60,
          }}>Previous</button>
           <button className="startbtn" onClick={()=> setValue(6)} style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20,
          height: 60,
          }}>Save and Continue</button>
             </div>
         </form>
            
         
        </div>

        <div>
          faqs
        </div>
     </div>
    )
}

export default PaymentDetail