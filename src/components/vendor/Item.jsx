import React from "react";
import '../../styles/VendorDash/ItemStyles.css'
import {FiShoppingCart} from 'react-icons/fi'

const Item = ({ name, category, identity, title, date, address }) => (
  <div className="item-container">
    <div className="item">
      <h1>{identity}</h1>
      <div className={
            category === 'Pending' ? 'pend' : 'ship'
         }>{category}</div>
    </div>
    <div className="item2">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
    <div className="add">
      <div style={{display: 'flex', alignItem: 'center'}}>
        <FiShoppingCart/>
        <p>{address}</p>
      </div>
      <div>
        <h4>{date}</h4>
      </div>
    </div>
  </div>
);

export default Item;