import React from "react";

const Store =({setValue})=>{
    return(
        <div style={{display: 'flex'}}>
        <div className="start2" style={{ height: 'auto', background: '#fff',alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Store and Product Information</h1>
         <form action="">
         
             <div className="lab">
                 <label htmlFor="">Store Name</label>
                 <input type="text" placeholder="Enter a name for your store"/>
             </div>
            
         
            
            <div>
            <h1 style={{
                color: '#000',
                textAlign: 'left',
                fontSize: 14,
            }}>Do you have a Universal Product Codes (UPCs) for all your products?</h1>
             
            
            <div style={{display: 'flex'}}>
            <div className="labbaa">
                
                <input type="radio" name="product"/>
                <p>Yes</p>
            </div>
            <div className="labbaa" style={{marginLeft: 30}}>
               
               <input type="radio" name="product"/>
               <p> No</p>
           </div>
            </div>
            </div>
            <div>
            <h1 style={{
                color: '#000',
                textAlign: 'left',
                fontSize: 14,
            }}>Are you the manufacturer or brand owner ( or agent or representative of the
                brand) for any of the products you want to sell an Atoovis?</h1>
             
            
            <div style={{display: 'flex'}}>
            <div className="labbaa">
                
                <input type="radio" name="brand"/>
                <p>Yes</p>
            </div>
            <div className="labbaa" style={{marginLeft: 30}}>
               
               <input type="radio" name="brand"/>
               <p> No</p>
           </div>
           <div className="labbaa" style={{marginLeft: 30}}>
               
               <input type="radio" name="brand"/>
               <p> Some of the items</p>
           </div>
            </div>
            </div>
            <div>
            <h1 style={{
                color: '#000',
                textAlign: 'left',
                fontSize: 14,
            }}>Do you own government-registered trademark for the branded products you
            want to sell on Atoovis?</h1>
             
            
            <div style={{display: 'flex'}}>
            <div className="labbaa">
                
                <input type="radio" name="own"/>
                <p>Yes</p>
            </div>
            <div className="labbaa" style={{marginLeft: 10}}>
               
               <input type="radio" name="own"/>
               <p> No</p>
           </div>
           <div className="labbaa" style={{marginLeft: 10}}>
               
               <input type="radio" name="own"/>
               <p> Some of the items</p>
           </div>
            </div>
            </div>

             <button className="startbtn" onClick={()=> setValue(6)} style={{
          color: '#fff',
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          marginLeft: -20,
          }}>Previous</button>
           <button className="startbtn" onClick={()=> setValue(7)} style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20,
          marginLeft: -20,
          }}>Save and Continue</button>
         </form>
            
         
        </div>

        <div>
          faqs
        </div>
     </div>
    )
}

export default Store