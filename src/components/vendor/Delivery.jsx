import React, {useState, useEffect, useMemo} from "react";
import styles from '../../styles/VendorDash/Dashboard.module.css'
import map from '../../assets/images/Header/Rectangle 9117.png'
import ride from '../../assets/images/Header/Group 413.png'
import Item from "./Item";


const Delivery =()=>{
    const [sportList, setSportList] = useState([]);

const [selectedCategory, setSelectedCategory] = useState();

const defaultSports = [
    { name: "Sony VR Headset (Product name)",
     category: "Pending", 
     title: 'Accesories (Category)',
     address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
     date: '24 Feb.',
     identity: 'ID 1234232'
    },
    { name: "Sony VR Headset (Product name)",
    category: "Shipped", 
    title: 'Accesories (Category)',
    address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
    date: '24 Feb.',
    identity: 'ID 1234232'
   },
   { name: "Sony VR Headset (Product name)",
     category: "Pending", 
     title: 'Accesories (Category)',
     address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
     date: '24 Feb.',
     identity: 'ID 1234232'
    },
    { name: "Sony VR Headset (Product name)",
    category: "Shipped", 
    title: 'Accesories (Category)',
    address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
    date: '24 Feb.',
    identity: 'ID 1234232'
   },
   { name: "Sony VR Headset (Product name)",
     category: "Pending", 
     title: 'Accesories (Category)',
     address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
     date: '24 Feb.',
     identity: 'ID 1234232'
    },
    { name: "Sony VR Headset (Product name)",
    category: "Shipped", 
    title: 'Accesories (Category)',
    address: '12,  Bisiba Close, Off Gimbiya Street, Garki.',
    date: '24 Feb.',
    identity: 'ID 1234232'
   },
   
    // { name: "Swimming", category: "Aquatics" },
    // { name: "Chess", category: "Indoor" },
    // { name: "BaseBall", category: "Outdoor" }
];

useEffect(() => {
    setSportList(defaultSports);
}, []);

function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
 };
 function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  };
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    return(
        <div className={styles.dashboard}>
            <div className={styles.topnav}>
                <p> / Delivery</p>
            </div>
            <div className={styles.del}>
                <div className={styles.pick}>
                    <div className={styles.ride}>
                        <div>
                            <img src={ride} alt="" />
                        </div>
                        <div className={styles.tics}>
                            <h2>Logistics Partners</h2>
                            <div className={styles.line}>
                            <div className={styles.square}></div>
                            <div style={{paddingLeft: 20}}>
                                
                                <h3>Logistics Company 1</h3>
                                <p>Gravida pulvinar sed nisi vel neque.</p>
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            </div>

                            <div className={styles.line}>
                            <div className={styles.square}></div>
                            <div style={{paddingLeft: 20}}>
                                
                                <h3>Logistics Company 1</h3>
                                <p>Gravida pulvinar sed nisi vel neque.</p>
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            </div>
                            <div className={styles.line}>
                            <div className={styles.square}></div>
                            <div style={{paddingLeft: 20}}>
                                
                                <h3>Logistics Company 1</h3>
                                <p>Gravida pulvinar sed nisi vel neque.</p>
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            </div>
                            <div className={styles.line}>
                            <div className={styles.square}></div>
                            <div style={{paddingLeft: 20}}>
                                
                                <h3>Logistics Company 1</h3>
                                <p>Gravida pulvinar sed nisi vel neque.</p>
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.active}>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: 300}}>
                        <h2>Active Orders</h2>
                        <select 
                              name="category-list"
                              id="category-list"
                              onChange={handleCategoryChange}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                        </select>
                        </div>
                        <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
                    </div>
                </div>
                <div className={styles.map}>
                    <h2>Pickup Address</h2>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Delivery