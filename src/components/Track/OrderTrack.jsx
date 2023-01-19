import React, {useState} from "react";
import ToggleVisibility from "./content/ToggleVisibility";
import Tracking from './content/Tracking'
import one from '../../assets/track/Frame 1000005022 (1).png'
import two from '../../assets/track/Frame 1000005023.png'
import three from '../../assets/track/Frame 1000005024.png'
import four from '../../assets/track/Frame 1000005025.png'
import { Link } from "react-router-dom";
const OrderTrack =()=>{

    // const [show, setShow] = useState();
    // var buttonText = show ? "Hide Component" : "Show Component";
    // function toggleShow() {
    //     setShow(!show);
    //   }

    return(
        <div>
            <div>
            <iframe className="you-tube"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
<div className="track-ing">
    <h1>
        Track Order
    </h1>
    <p>To track an order follow the steps below</p>
    <ol>    
        <li>From your account click on orders</li>
        <li>Then click see details in front of the order you wish to track</li>
        <li>Click the Track Item button and the delivery details willl be displayed</li>
    </ol>
    {/* <button onClick={toggleShow}>{buttonText}</button> */}
    <ToggleVisibility>
       <div className="click">
       <h2>Click the drop-down arrow beside Help and select <span>Place & Track Orders</span></h2>
       <img src={one} alt="" />
       </div>
       <div className="click">
       <h2>Click the <span>View Order Details</span> in front of the order you want to track.</h2>
       <img src={two} alt="" />
       </div>
       <div className="click">
       <h2>Click the <span>Track my Item</span> button to track your order</h2>
       <img src={three} alt="" />
       </div>
       <div className="click">
       <h2>Click the <span>View on Map</span> button to track your order on the map</h2>
       <img src={four} alt="" />
       </div>
       <div className="click">
       <h2>Click <Link>here</Link> to track your order on your dashboard</h2>
       {/* <img src={one} alt="" /> */}
       </div>
    </ToggleVisibility>
</div>
            </div>
        </div>
    )
}

export default OrderTrack