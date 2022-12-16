import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {AiFillStar} from 'react-icons/ai'
import {HiChatAlt2} from 'react-icons/hi'
import {BiCategoryAlt} from 'react-icons/bi'
import Customer from "../CustomerReview/Customer";
const CustomerReview = () =>{
    return(
        <div  className={styles.dashboard}>
             <div className={styles.topnav}>
                <p> / Transactions</p>
            </div>
            <div className={styles.transs}>
                <div className={styles.inni}>
                    <p>Ratings</p>
                    <div className={styles.port}>
                    <h1>4.2</h1>
                    <div > <AiFillStar className={styles.spann}/> </div>
                    </div>
                    <h4>73k Reviews</h4>
                </div>
                <div className={styles.inni}>
                    <p>Comments</p>
                    <div className={styles.port}>
                    <h1>14k</h1>
                    <div > <HiChatAlt2 className={styles.spann}/> </div>
                    </div>
                    <h4>Customer Comments</h4>
                </div>
                <div className={styles.inni}>
                    <p>Products</p>
                    <div className={styles.port}>
                    <h1>37k</h1>
                    <div > <AiFillStar className={styles.spann}/> </div>
                    </div>
                    <h4>Products Reviewed</h4>
                </div>
                <div className={styles.inni}>
                    <p>Categories</p>
                    <div className={styles.port}>
                    <h1>5</h1>
                    <div > <BiCategoryAlt className={styles.spann}/> </div>
                    </div>
                    <h4>Categories Reviewed</h4>
                </div>
              
            </div>
            <div>
                <Customer/>
            </div>
        </div>
    )
}

export default CustomerReview;