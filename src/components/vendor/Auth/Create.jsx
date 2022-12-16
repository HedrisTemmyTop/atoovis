import React from "react";
import wel from '../../../assets/images/Header/Group 11967 (1).png'
import '../../../styles/auth/welcome.css'
const Create = ({setValue})=>{
    return(
        <div>
           <div style={{ height: 'auto', borderRadius:27, background: '#fff', alignItems: 'center', display: 'flex', flexDirection: 'column'}} className='start1'>
           <h1 style={{marginBottom: 10,  color: '#000',}}>Start selling your business on Atoovis by creating a profile 🎉</h1>
           <p style={{marginTop: 10, textAlign: 'left'}}>
                Getting started couldn't be easier. Just create your profile (you can always change it later).
                </p>
                <iframe height="315" style={{borderRadius: 20, marginTop: 20}}
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
               
            <button onClick={()=> setValue(3)} style={{background: '#4CC5D2',
             color: '#fff',
             height: 60,
             borderRadius: 100,
             marginTop: 20
             }}
             className='startbtn'
             >Get Started</button>
           </div>
        </div>
    )
}

export default Create