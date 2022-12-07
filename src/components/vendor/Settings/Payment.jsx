import React from "react";
import '../../../styles/settings/General.css'
const Payment =()=> {
    return(
        <div>
            <div className="pay">
                    <h1>Payment Methods</h1>
                    <div className="payee">
                        <div>
                            <h3>Default Currency</h3>
                            <h4>Accept Payments Via</h4>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="">NGN</option>
                            </select>
                           <div style={{display: 'flex', marginTop: 10}}>
                           <input type="checkbox" />
                           <p style={{}}>Bank</p>
                           </div>
                           <div style={{display: 'flex', marginTop: 10}}>
                           <input type="checkbox" />
                           <p style={{}}>Card</p>
                           </div>
                           <div style={{display: 'flex', marginTop: 10}}>
                           <input type="checkbox" />
                           <p style={{}}>USSD</p>
                           </div>
                           <div style={{display: 'flex', marginTop: 10}}>
                           <input type="checkbox" />
                           <p style={{}}>Bank Transfer</p>
                           </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment;