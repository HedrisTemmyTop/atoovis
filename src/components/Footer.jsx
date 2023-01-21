import React from "react";
import logo from "../assets/images/Header/Atoovislogo-white 2.png"
import search from "../assets/images/Header/search.png"
import '../styles/header.css'
import { ImFacebook, ImInstagram, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import {FiHome} from 'react-icons/fi'
import {BiCategory} from 'react-icons/bi'
import {MdOutlineRssFeed, MdOutlineAccountCircle} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div>
          <div className="footer">
           
           <div className="main">
           <div>
          <Link to= '/'> <img src={logo}/></Link>
           </div>

          <div>
           <p style={{textAlign: 'left'}}>Stay updated with our newsletter to get the best offer</p>
          <div className="mid">
               <div className="email">
                  
               <input type="text" placeholder="Email Address"/>
               </div>
               <button className="btn">Subscribe</button>
           </div>
          </div>

           <div className="list">
               <ul>
                   <li>About Us</li>
                   <li><Link to='/faqs'>FAQs</Link></li>
                   <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                   <li><Link to='/term-condition'>Terms and Conditions</Link></li>
                   <li> <Link to='/vendor'>Sell on Atoovis</Link></li>
               </ul>
           </div>
           <div className="connect">
               <p>Connect with us</p>
               <ul>
                   <li><ImFacebook /></li>
                   <li><ImTwitter/></li>
                   <li><ImInstagram/></li>
                   <li><ImLinkedin2/></li>
               </ul>
           </div>
           </div>
           <div className="bot">
        <div className="line"></div>
        <p>© 2022 Atoovis.  All rights reserved.</p>
        <div className="line"></div>
       </div>
           
       </div>

      <div className="sit">
      <div className="mobile">
       <div >
           <img src={logo}/>
           </div>
           <div className="connect" style={{marginTop: 20,}}>
               <p>Connect with us</p>
               <ul>
                   <li><ImFacebook /></li>
                   <li><ImTwitter/></li>
                   <li><ImInstagram/></li>
                   <li><ImLinkedin2/></li>
               </ul>
           </div>
           <div style={{marginTop: 20,}}>
           <p style={{textAlign: 'left'}}>Stay updated with our newsletter to get the best offer</p>
          <div className="mid">
               <div className="email">
                  
               <input type="text" placeholder="Email Address"/>
               </div>
               <button className="btn">Subscribe</button>
           </div>
          </div>
          <div style={{marginTop: 20,}}>
               <ul>
                   <li>About Us</li>
                   <li>FAQs</li>
                   <li><Link to='/privacy'>Privacy Policy</Link></li>
                   <li>Terms and Conditions</li>
                   <li> <Link to='/vendor'>Sell on Atoovis</Link></li>
               </ul>
           </div>
           <div className="bot">
        <div className="line"></div>
        <p>© 2022 Atoovis.  All rights reserved.</p>
        <div className="line"></div>
       </div>
       
       </div>
       {/* <div className="bottom-nav">
            <div><FiHome className="fix"/>Home</div>
            <div><BiCategory className="fix"/> Category</div>
            <div><MdOutlineRssFeed className="fix"/> Feed</div>
            <div><FiShoppingCart className="fix"/> Cart</div>
            <div><MdOutlineAccountCircle className="fix"/> Account</div>
        </div> */}
      </div>
      </div>
    )
}

export default Footer;