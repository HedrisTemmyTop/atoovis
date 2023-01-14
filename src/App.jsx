import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Vendor from './pages/VendorLanding'
import Sidebar from './pages/Sidebar'
import FeaturedProducts from './pages/Buyer/FeaturedProduct'
import RecentlyAdded from './pages/Buyer/RecentlyAdded'
import FrequentlyPurchased from './pages/Buyer/FrequentlyPurchased'
import MyCart from './pages/Buyer/MyCart'
import { Route, Routes,  } from 'react-router-dom'
import Checkout from './pages/Buyer/Checkout'
import PlaceOrder from './pages/Buyer/PlaceOrder'
import Footer from './components/Footer'
import BuyerSidebar from './pages/BuyerSidebar'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Faqs from './pages/Faqs'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='vendor' element={<Vendor/>}/>
      <Route path='sidebar/*' element={<Sidebar/>}/>
      <Route path='featured' element={<FeaturedProducts/>}/>
      <Route path='recently' element={<RecentlyAdded/>}/>
      <Route path='frequent' element={<FrequentlyPurchased/>}/>
      <Route path='cart' element={<MyCart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='order/*' element={<PlaceOrder/>}/>
      <Route path = 'buyer/*' element={<BuyerSidebar/>}/>
      <Route path='privacy-policy' element={<Privacy/>}/>
      <Route path='term-condition' element={<Terms/>}/>
      <Route path='faqs' element={<Faqs/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App
