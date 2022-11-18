import React from "react";
import '../styles/product.css'
import place from '../assets/images/Header/Mask Group (3).png'
import rating from '../assets/images/Header/Ratings (1).png'
import love from '../assets/images/Header/Vector (5).png'

const FeaturedProduct = () => {
    return(
        <div className="cover">
            <h1>More Products</h1>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
           <div className="inner">
            <img src={place} alt="" />
            <p style={{fontWeight: 300, fontSize: 15, textAlign: 'left' }}>Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: 130}}>
                    <p style={{fontWeight: 700, fontSize: 20, }}>₦54,500</p>
                    <p style={{fontWeight: 400, fontSize: 12, opacity: .5, textDecoration: 'line-through' }}>₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" />
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div> 

            <div className="inner">
            <img src={place} alt="" />
            <p style={{fontWeight: 300, fontSize: 15, textAlign: 'left' }}>Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: 130}}>
                    <p style={{fontWeight: 700, fontSize: 20, }}>₦54,500</p>
                    <p style={{fontWeight: 400, fontSize: 12, opacity: .5, textDecoration: 'line-through' }}>₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" />
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div> 

            <div className="inner">
            <img src={place} alt="" />
            <p style={{fontWeight: 300, fontSize: 15, textAlign: 'left' }}>Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: 130}}>
                    <p style={{fontWeight: 700, fontSize: 20, }}>₦54,500</p>
                    <p style={{fontWeight: 400, fontSize: 12, opacity: .5, textDecoration: 'line-through' }}>₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" />
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div> 

            <div className="inner">
            <img src={place} alt="" />
            <p style={{fontWeight: 300, fontSize: 15, textAlign: 'left' }}>Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: 130}}>
                    <p style={{fontWeight: 700, fontSize: 20, }}>₦54,500</p>
                    <p style={{fontWeight: 400, fontSize: 12, opacity: .5, textDecoration: 'line-through' }}>₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" />
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div>     
           </div>
        </div>
    )
}

export default FeaturedProduct