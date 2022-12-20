import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import '../../styles/wallet/wallet.css'
import Refund from '../../components/Refunds/Refund'
import { Link } from "react-router-dom";
const Refunds = ()=> {
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
             <BiCategoryAlt/> <p>  / Wallet / Refunds</p>
            </div>

            <div className="jointt">
                <div className="crow">
                    <h3>Escrow Balance</h3>
                    <h1>₦500,250</h1>
                </div>

                <div className="crow">
                    <h3>Escrow Balance</h3>
                    <h1>₦500,250</h1>
                </div>
            </div>

            <div className="bott">
            <button ><Link to='/sidebar/my-account'>My Account</Link></button>
                <button >
                    <Link to='/sidebar/wallet'>Withdrawals</Link>
                </button>
                <button style={{color: '#4CC5D2', background: 'white'}}><Link to='/sidebar/refunds'>Refunds</Link></button>
                <button><Link to='/sidebar/payout'>Payout</Link></button>
            </div>

            <div>
                <Refund/>
            </div>
        </div>
    )
}

export default Refunds;