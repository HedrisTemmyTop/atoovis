import React from "react";

const Identity =({setValue})=>{
    return(
        <div style={{display: 'flex'}}>
        <div className="summa" style={{ height: 'auto',  background: '#fff',  alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Identity Verification</h1>
        <p style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 12}}>
            Please choose one of the available options to connect
             with an Atoovis associate to complete your verification.</p>
         

            <form action="">
                <div style={{display: 'flex'}}>
                  <div>
                    <input type="radio" name="schedule"/>
                  </div>
                  <div style={{marginLeft: 10}}>
                    <div style={{display: 'flex', justifyContent:'space-between', width:'100%'}}>
                      <div><p style={{fontSize: 14, fontWeight: 700}}>Scheduled Video Call</p></div>
                      <div className="ppp"><p style={{fontSize: 12, fontWeight: 500}}>Wait time: 2-4 days</p></div>
                    </div>
                    <p style={{fontSize: 12, fontWeight: 500}}>Schedule an appointment with an Atoovis
                       Associate on a future date. Carry your 
                       original government issued photo ID document 
                       and other documents you uploaded during registration</p>
                  </div>
                </div>

                <div style={{display: 'flex', marginTop: 10}}>
                  <div>
                    <input type="radio" name="schedule"/>
                  </div>
                  <div style={{marginLeft: 10}}>
                    <div style={{display: 'flex', justifyContent:'space-between', width:'100%'}}>
                      <div><p style={{fontSize: 14, fontWeight: 700}}>Instant Video Call</p></div>
                      <div  className="ppp"><p style={{fontSize: 12, fontWeight: 500}}>Wait time: 9am -5pm</p></div>
                    </div>
                    <p style={{fontSize: 12, fontWeight: 500}}>Schedule an appointment with an Atoovis
                       Associate on a future date. Carry your 
                       original government issued photo ID document 
                       and other documents you uploaded during registration</p>
                  </div>
                </div>
            <button className="savebtn2" onClick={()=> setValue(8)} style={{
          color: '#fff',
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          }}>Previous</button>
           <button className="savebtn2" onClick={()=> setValue(10)} style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20
          }}>Continue</button>
            </form>
      
            
         
        </div>

        <div>
          faqs
        </div>
     </div>
    )
}

export default Identity