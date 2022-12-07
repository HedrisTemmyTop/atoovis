import React from "react";
import '../../../styles/settings/General.css'
const General =()=>{
    return(
        <div>
            <div className="joint">
                <div className="infor">
                    <h1>General Information</h1>
                    <button >Edit Profile</button>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className="sqr"></div>
                    <p style={{fontSize: 14, fontWeight: 500, fontFamily: 'lato', marginLeft: 20}}>Edit Seller Logo</p>
                </div>
                <form action="">
                    <p>
                        <label htmlFor="">Seller ID</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Email Address</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" />
                    </p>
                    <p>
                        <label htmlFor="">Shop Name</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" />
                    </p>

                    <button>Save Bio</button>
                </form>
            </div>
        </div>
    )
}

export default General