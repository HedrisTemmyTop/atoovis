import React from "react";
import putin from '../../../assets/images/Header//Group (4).png'
const Congrat =()=>{
    return(
        <div style={{display: 'flex'}}>
        <div style={{width: 555, height: 'auto', borderRadius:27, background: '#fff', margin: 40, padding: 40, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        
            <img src={putin} alt="" width={64} height={64} />
        <h1 style={{marginBottom: 10, textAlign: 'center', color: '#000', fontSize: 24, fontWeight: 800, marginTop: 20}}>CONGRATULATIONS...</h1>
        <p style={{marginBottom: 10, textAlign: 'center', color: '#000', fontSize: 14, fontWeight: 500, marginBottom: 20}}>
        Your membership portal has been created!</p>
        <p style={{marginBottom: 10, textAlign: 'center', color: '#000', fontSize: 14, fontWeight: 500}}>
        What next?</p>
        <p style={{marginBottom: 10, textAlign: 'center', color: '#000', fontSize: 16, fontWeight: 500}}>
        Upload and sell your product</p>

       
         

        <p style={{marginBottom: 10, textAlign: 'center', color: '#495454', fontSize: 14, fontWeight: 400}}>
        Now that your content portal has been created, it’s time to charge for it! The system will automatically email your new customers their username and password to the portal. 
        Proceed to create/edit your product at the My Products page.</p> 

               
            
           <button onClick={()=> setValue(10)} style={{background: '#4CC5D2',
          color: '#fff',
          width: 495,
          height: 66,
          borderRadius: 100,
          marginTop: 20
          }}>Go to Products</button>
          
            
         
        </div>

     </div>
    )
}

export default Congrat