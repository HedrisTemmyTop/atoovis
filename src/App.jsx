import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Vendor from './pages/VendorLanding'
import { Route, Routes,  } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='vendor' element={<Vendor/>}/>
     
    
    </Routes>
    <Footer/>
   </>
  )
}

export default App
