import React from "react";
import wel from '../../../assets/images/Header/Group 11967 (1).png'
const Welcome = ({setValue})=>{
    return(
        <div>
           <div style={{width: 555, height: 'auto', borderRadius:27, background: '#fff', margin: 40, padding: 40, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
           <h1 style={{marginBottom: 20, textAlign: 'center', color: '#000', fontSize: 20}}>Welcome to Atoovis! 👋🏾</h1>
            <img src={wel} alt="" />
                <p style={{marginTop: 20, textAlign: 'center'}}>
                To start selling on Atoovis, Before starting,
                 please ensure you have the following handy, Business and 
                 contact address, Mobile and Telepjone number, Chargeable
                  Credit Card, Identity details. Kindly follow the steps below to provide 
                required details and documents to start selling your products.
                </p>
            <button onClick={()=> setValue(2)} style={{background: '#4CC5D2',
             color: '#fff',
             width: 475,
             height: 60,
             borderRadius: 100,
             marginTop: 20
             }}>Continue</button>
           </div>
        </div>
    )
}

export default Welcome