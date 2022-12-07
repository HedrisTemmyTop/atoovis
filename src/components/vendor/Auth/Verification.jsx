import React from "react";

const Verification =({setValue})=>{
    return(
        <div style={{display: 'flex'}}>
        <div style={{width: 555, height: 'auto', borderRadius:27, background: '#fff', margin: 40, padding: 40, alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Verification</h1>
         <form action="">
            
             <div className="lab">
                 <label htmlFor="">CAC Document</label>
                 <input type="file" />
             </div>
            
             <div className="lab">
                 <label htmlFor="">Valid ID of Business Owner</label>
                 <input type="file" />
             </div>
             <div className="lab">
                 <label htmlFor="">Bank Account Statement</label>
                 <input type="file" />
             </div>
             <div className="lab">
                 <label htmlFor="">Additional Document</label>
                 <input type="file" />
             </div>
           
            
         

             <button onClick={()=> setValue(6)} style={{
          color: '#fff',
          width: 495,
          height: 66,
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          }}>Previous</button>
           <button onClick={()=> setValue(8)} style={{background: '#4CC5D2',
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

export default Verification