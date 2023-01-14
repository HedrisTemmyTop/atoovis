import React from "react";
import '../../styles/BuyerSide/buyer.css'
import wish from '../../assets/images/Header/Mask Group.png'
const WishList =()=>{
   
    return(
        <div>
            <div  style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <div>
                <h1>My Wishlist</h1>
                </div>
            </div>
            <div className="boww bow">
            <img src={wish} alt="" />
            <h3>No Favourites yet!</h3>
            <p>Feel free to explore our product categories</p>
            <button>Explore Product Categories</button>
           
        </div>
        </div>
    )
}

export default WishList