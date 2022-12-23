import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import '../../styles/wallet/wallet.css'
import Withdraw from '../../components/Withdrawal/Withdraw'
import { Link } from "react-router-dom";
const Wallet = ()=> {
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
             <BiCategoryAlt/> <p>  / Wallet / Withdrawals</p>
            </div>

            <div className="jointt">
                <div className="crow">
                    <h3>Escrow Balance</h3>
                    <h1>₦500,250</h1>
                </div>

                <div className="crow">
                <h3>Wallet Balance</h3>
                    <h1>₦393,2500</h1>
                </div>
            </div>

            <div className="bott" >
            <button ><Link to='/sidebar/my-account'>My Account</Link></button>
                <button style={{color: '#4CC5D2', background: 'white'}}>
                    <Link to='/sidebar/wallet'>Withdrawals</Link>
                </button>
                <button ><Link to='/sidebar/refunds'>Refunds</Link></button>
                <button><Link to='/sidebar/payout'>Payout</Link></button>
            </div>

            <div>
                <Withdraw/>
            </div>
        </div>
    )
}

export default Wallet;