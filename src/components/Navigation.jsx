import React from "react";
import '../styles/Navigation.css'
import {AiFillAppstore} from 'react-icons/ai'

const Navigation = () => {
    return(
        <div className="navi">
            <p style={{display: 'flex'}}> <AiFillAppstore/> All Categories</p>
            <p>Computer & Accessories</p>
            <p>Phones & Tablets</p>
            <p>Electronics</p>
            <p>Fashion</p>
            <p>Home & Kitchen</p>
            <p>Baby, Kids & Toys</p>
            <p>Other Categories</p>

        </div>
    )
}

export default Navigation;