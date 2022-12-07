import React from "react";
import wel from '../../../assets/images/Header/Group 11967 (1).png'
const Create = ({setValue})=>{
    return(
        <div>
           <div style={{width: 555, height: 'auto', borderRadius:27, background: '#fff', margin: 40, padding: 40, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
           <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Start selling your business on Atoovis by creating a profile 🎉</h1>
           <p style={{marginTop: 10, textAlign: 'left'}}>
                Getting started couldn't be easier. Just create your profile (you can always change it later).
                </p>
                <iframe width="500" height="315" style={{borderRadius: 20, marginTop: 20}}
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
               
            <button onClick={()=> setValue(3)} style={{background: '#4CC5D2',
             color: '#fff',
             width: 475,
             height: 60,
             borderRadius: 100,
             marginTop: 20
             }}>Get Started</button>
           </div>
        </div>
    )
}

export default Create