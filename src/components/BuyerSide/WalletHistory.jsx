import React from "react";
import '../../styles/BuyerSide/wallet.css'
import {BiShow} from 'react-icons/bi'
import HistoryTable from './HistoryTable'
const WalletHistory = ()=>{
    return(
        <div>
            <div className="wal">
                <div>
                    <p>Wallet Balance</p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1>N0.00</h1> <BiShow style={{width: 30, height: 22}}/>
                    </div>
                </div>
                <div>
                    <button>Fund Your Wallet</button>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center'}} className='ars'>
                <button>All</button>
                <button>Recieved</button>
                <button>Sent</button>
            </div>

            <div>
                <HistoryTable/>
            </div>
        </div>
    )
}

export default WalletHistory