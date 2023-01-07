import React from "react";
import { Link } from "react-router-dom";
const Ussd =()=>{
    return(
        <div>
        <h1>Choose your bank to start payment</h1>

        <form action="">
        <div style={{marginTop: 12}}>
            <p>Bank</p>
            <div  className="bankyy">
            <select name="" id="" className="bankselect">
            <option value="">
                   Fidelity Bank
                </option>
                <option value="">
                <option value="">
                   Fidelity Bank
                </option>
                </option>
                <option value="">
                <option value="">
                   Fidelity Bank
                </option>
                </option>
                <option value="">
                   Fidelity Bank
                </option>
                <option value="">
                   Fidelity Bank
                </option>
            </select>
            <div>
                <p>*737#</p>
            </div>
            </div>
        </div>
        <Link to='/order/ussd-code'><button className="fff"><p>Pay<span> N273,000.00</span></p></button></Link>
        </form>
       
    </div>
    )
}

export default Ussd