import React from "react";
import visa from '../../assets/images/Header/Frame 926 (1) 2 (1).png'
import master from '../../assets/images/Header/Frame 926 (1) 3 (1).png'
import verve from '../../assets/images/Header/pngfind 1 (1).png'
const PayCard =()=>{
    return(
        <div>
        <h1>Enter your card details to pay</h1>

       <form action="">
       <div style={{marginTop: 12}}>
            <div>
            <h3>Bank</h3>
            <div className="hdd">
                <input type="text" placeholder="0000 0000 0000 0000"/>
                <div style={{display: 'flex'}}>
                    <img src={verve} alt="" />
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                </div>
            </div>
            </div>
            <div className="hod">
                
                <div>
                    <h3>Expiry Date</h3>
                <input type="date" name="" id="" />
                </div>
                <div>
                    <h3>CVV</h3>
                <input type="number" placeholder="123"/>
                </div>
            </div>
        </div>

        <button className="fff"><p>Pay<span> N273,000.00</span></p></button>
       </form>
     
    </div>
    )
}

export default PayCard