import React, {useEffect} from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import RealProduct from '../../components/Product/RealProduct'
import { getAllProducts } from "../../slices/productSlice"
import { useDispatch, useSelector } from "react-redux"

const Product =()=>{
    const dispatch = useDispatch()
    const { data, isError, isLoading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    console.log("data", data)

    
    return(
        <div className={styles.dashboard}>
             <div className={styles.topnav}>
             <BiCategoryAlt/> <p>  / Products</p>
            </div>

            <div>
                <RealProduct products={data.product}/>
            </div>
        </div>
    )
}

export default Product;