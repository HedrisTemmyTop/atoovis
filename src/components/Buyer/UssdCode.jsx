import React from "react";
import {BiCopy} from 'react-icons/bi'
const UssdCode =()=>{
    return(
        <div>
        

        <div className="nummb">
        <h2 style={{width: 276, fontSize:14, color: '#000', fontWeight: 200}}>Dial the <span style={{fontWeight: 800}}>Guaranty Bank</span> USSD code below on your mobile phone to complete payment</h2>
            <h1>*737*000*5673#</h1>
            <div className="uscode">
                <p>Copy USSD code</p>
                <BiCopy />
            </div>
            <h3>
            You have 4 mins 59 secs left to complete this payment
            </h3>
          
        </div>
        <button className="fff"><p>I have completed this payment</p></button>
     
    </div>
    )
}

export default UssdCode