import React from 'react'
import styles from '../../styles/VendorDash/Dashboard.module.css'
import Orders from '../Dashboard/Orders';
import Sales from '../Dashboard/Sales'
const Dashboard =()=> {
    console.log(styles);
    return(
        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <p>/ Dashboard</p>
            </div>
            <div className={styles.content}>
                <div>
                    <div>
                        <div>
                            <Orders/>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div>
                   <Sales/> 
                </div>
            </div>
        </div>
    )
}

export default Dashboard