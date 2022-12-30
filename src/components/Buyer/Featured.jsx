import React from 'react'
import place from '../../assets/images/Header/Mask Group (3).png'
import rating from '../../assets/images/Header/Ratings (1).png'
import love from '../../assets/images/Header/Vector (5).png'
import Navigation from '../Navigation'
import {Data} from './data/FrequentData'
import Header from '../Header'
const Featured = ({})=>{
    return(
        <section>
            <Header/>
            <Navigation/>
            <div style={{paddingLeft: 20, textAlign: 'left', color: '#061F1E', fontWeight: 400, fontSize: 16, marginBottom: 25}}>
                <p style={{color: '#000'}}>Home / Featured Products</p>
            </div>
             <h1 style={{paddingLeft: 20,textTransform: 'uppercase', textAlign: 'left', color: '#000', fontWeight: 800, fontSize: 30}}>Featured Products</h1>
             <section className="cover">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-auto place-items-center my-10">
                {Data
            && Data.map((type, index) => (
                <div  key={index}>
                    <div className="inner" key={index}>
                <img src={place} alt="" />
                <p className="till">{type.brief}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', }}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="contain1">
                        <p className="little">{type.price}</p>
                        <p  className="lit">{type.slash}</p>
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
            ))}
            </div>

                </section>
        </section>
    )
}

export default Featured