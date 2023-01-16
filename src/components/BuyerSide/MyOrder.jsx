import React from "react";
import '../../styles/BuyerSide/buyer.css'
import wish from '../../assets/images/Header/order.png'
const MyOrder =()=>{
   
    return(
        <div>
            <div  style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <div>
                <h1>My Orders</h1>
                <div>
                    <button>All</button>
                    <button>Unpaid <span>(3)</span></button>
                    <button>Processing <span>(0)</span></button>
                    <button>Shipped <span>(0)</span></button>
                    <button>Completed</button>
                </div>
                </div>
            </div>
            <div className="boww bow">
            <img src={wish} alt="" />
            <h3>No Order History yet</h3>
            <p>You have not made any purchase recently</p>
            <button>Explore Product Categories</button>
           
        </div>
        </div>
    )
}

export default MyOrder