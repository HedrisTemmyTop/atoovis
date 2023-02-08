import React from "react";
import One from "../../assets/images/Header/Mask group.png";
import "../../styles/Buyer/cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import check from "../../assets/Check.png";
import game from "../../assets/game.png";
import { useState } from "react";
import { Link } from "react-router-dom";
// const Items= ()=>{
//     return(
//         <div style={{display: 'flex', justifyContent: 'space-between'}}>
//             <div style={{display: 'flex',}}>
//                 <div>
//                     <input type="checkbox" />
//                 </div>
//                 <div style={{marginLeft: 10}}>
//                     <img src={One} alt="" />
//                 </div>
//                 <div className="sun">
//                     <h1>Sunlight Dishwashing Liquid Green 400ml</h1>
//                     <h2>KYC Stores</h2>
//                     <div className="pprr">
//                         <h3>₦54,500</h3>
//                         <h4>₦61,000</h4>
//                         <h5>-41%</h5>
//                     </div>
//                 </div>
//             </div>

//             <div className="ree">
//                 <div style={{display: 'flex',}}>
//                     <AiFillHeart style={{color: '#D0D1D1',  marginRight: 20, height:30, width: 40}}/>
//                     <div style={{display: 'flex'}}>
//                         <RiDeleteBin6Line style={{color: '#4CC5D2', height: 20, width:16}}/>
//                     <p>Remove</p>
//                     </div>
//                 </div>
//                 <div style={{display: 'flex', alignItems: 'flex-end'}}>
//                     <div className="rap">+</div>
//                     <div style={{padding: 5}}><p>1</p></div>
//                     <div className="rap">-</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Items

const Items = ({ item }) => {
  const productQuantity = item.productId.variation[0].quantity;
  const [quantity, setQuantity] = useState(item.quantity);
  const increaseQuatity = () => {
    if (quantity === productQuantity) return;
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="item__container">
      <div className="item__main">
        <div className="check">
          <img src={check} alt="check" />
        </div>
        <div className="item__image">
          <img src={game} alt="game" />
        </div>
        <div className="item__description">
          <div className="item__des">{item.productId.productName}</div>
          <div className="item__store">
            <Link to={"/" + item.productId.vendor._id}>KYC store</Link>
          </div>
          <div className="item__price">
            <span className="item__real">
              ₦
              {(
                item.productId.variation[0].salePrice.replace(/[a-z]+/g, "") *
                quantity
              ).toLocaleString()}
            </span>
            <span className="item__fake">
              ₦{item.productId.variation[0].price.toLocaleString()}
            </span>
            <span className="item__discount">-61%</span>
          </div>
        </div>
      </div>

      <div className="item__options">
        <AiFillHeart className="item__love" />

        <div className="item__remove--quantitiy">
          <div className="item__remove">
            <RiDeleteBin6Line />
            <span>Remove</span>
          </div>
          <div className="item__quantity">
            <span className="item__quantity--btn">
              <span onClick={increaseQuatity}>+</span>
            </span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                if (+e.target.value <= productQuantity)
                  setQuantity(e.target.value);
              }}
            />
            <span className="item__quantity--btn" onClick={decreaseQuantity}>
              <span>-</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
