import React from "react";
import '../../styles/Buyer/Payment.css'
const PayBank =()=>{
    return(
        <div>
            <h1>Choose your bank to start payment</h1>

            <div style={{marginTop: 12}}>
                <p>Bank</p>
                <select name="" id="" className="banky">
                    <option value="">
                        <div>
                            <input type="radio" />
                            <p>First Bank</p>
                        </div>
                    </option>
                    <option value="">
                        <div>
                            <input type="radio" />
                            <p>GTBank</p>
                        </div>
                    </option>
                    <option value="">
                        <div>
                            {/* <input type="radio" /> */}
                            <div className="incir"></div>
                            <p>United Bank of Africa</p>
                        </div>
                    </option>
                    <option value="">
                        <div>
                            <input type="radio" />
                            <p>Fidelity Bank</p>
                        </div>
                    </option>
                    <option value="">
                        <div>
                            <input type="radio" />
                            <p>Providus Bank</p>
                        </div>
                    </option>
                </select>
            </div>
         
        </div>
    )
}

export default PayBank