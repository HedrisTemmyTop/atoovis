import React from "react";
import '../styles/product.css'
import place from '../assets/images/Header/Mask Group (3).png'
import rating from '../assets/images/Header/Ratings (1).png'
import love from '../assets/images/Header/Vector (5).png'

const FeaturedProduct = () => {
    return(
        <div className="cover">
            <h1>More Products</h1>
           <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-auto place-items-center">
           <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div> 

            <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div>  

            <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div>  

            <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div> 

            <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
                </div>
                
            </div>
            <img src={rating} alt="" style={{marginTop: 10}}/>
            <button>
            Add to cart
            </button>
            </div>  

            <div className="inner">
            <img src={place} alt="" />
            <p className="till">Product name and brief description...</p>
            <div style={{display: 'flex', justifyContent: 'space-between', }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain">
                    <p className="little">₦54,500</p>
                    <p  className="lit">₦61,000</p>
                </div>
                <div>
                <img src={love} alt="" className="love"/>
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