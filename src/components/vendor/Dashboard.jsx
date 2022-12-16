import React from 'react'
import styles from '../../styles/VendorDash/Dashboard.module.css'
import Orders from '../Dashboard/Orders';
import Sales from '../Dashboard/Sales'
// import Graph from '../Graph'
import '../../styles/VendorDash/Graph.css'
import Graphy from '../Graphy';
import Store from '../StorePerformance'
import Notification from '../Notification';
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
                        <div className='graph'>
                            <div className='inner-graph'>
                                <div >
                                    <h1>Revenue in the (Last 12 Months)</h1>
                                    <h3>N500,030.33</h3>
                                    <h4>2.1% <span>vs last month</span></h4>
                                </div>
                                <select name="" id="">
                                    <option value="">...</option>
                                    <option value="">Last 30 days</option>
                                </select>
                            </div>
                            <Graphy/>
                        </div>
                        <div className='stn'>
                            <Store/>
                            <Notification/>
                        </div>
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