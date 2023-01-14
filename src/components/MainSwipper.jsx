
import swipe from '../assets/images/Header/swipe.png'
import swipe2 from '../assets/images/Header/Frame 39909.png'
import swipe3 from '../assets/images/Header/Frame 39910.png'
import '../styles/Buyer/Terms.css'
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
   
class MainSwipper extends Component {  
    render() {  
        return (  
            <Carousel
            autoPlay = {true}
            infiniteLoop = {true}
            showThumbs = {false}
            swipeable = {false}
            width = {'90%'}
            >  
                <div className=''>  
                    <img src={swipe}/>  
                </div>  
                <div>  
                <img src={swipe2} />   
                </div>  
                <div>  
                <img src={swipe3} />   
                </div>  
            </Carousel>  
        );  
    }  
}

export default MainSwipper