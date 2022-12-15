import React from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import RealProduct from '../../components/Product/RealProduct'
const Product =()=>{
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
             <BiCategoryAlt/> <p>  / Products</p>
            </div>

            <div>
                <RealProduct/>
            </div>
        </div>
    )
}

export default Product;