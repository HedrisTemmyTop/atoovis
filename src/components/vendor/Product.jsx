import React, {useEffect} from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import {BiCategoryAlt} from 'react-icons/bi'
import RealProduct from '../../components/Product/RealProduct'
import { getAllProducts } from "../../slices/productSlice"
import { useDispatch, useSelector } from "react-redux"
import Products from '../../components/Product/Products'

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
                    <div className={styles.moll}>
                        <h1 >Product</h1>
                        <button style={{width: 168}} className={styles.thir}>Export</button>
                    </div>
            <div className="duct">
                <RealProduct products={data.product}/>
                <div>
                    <Products/>
                </div>
            </div>
        </div>
    )
}

export default Product;