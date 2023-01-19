import React from 'react' 
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import OrderTrack from '../../components/Track/OrderTrack';
import PlaceOrder from '../../components/Track/PlaceOrder';
import CancelOrder from '../../components/Track/CancelOrder';
import '../../styles/BuyerSide/track.css'
import { Route, Routes, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const TrackOrder =()=>{
    return(
        <div>
            <Header/>
            <Navigation/>
            <div className='new-order'>
            <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
            <div className='place-order'>
                <ul>
                    <li>
                        <Link to='/track-order/place-order'>Place Order</Link>
                    </li>
                    <li>
                        <Link to='/track-order'>Track Order</Link>
                    </li>
                    <li>
                        <Link to='/track-order/cancel-order'>Order Cancellation</Link>
                    </li>
                </ul>
            </div>
            <div className='place-route'>
                <Routes>
                    <Route path='/' element={<OrderTrack/>}/>
                    <Route path='/place-order' element={<PlaceOrder/>}/>
                    <Route path='/cancel-order' element={<CancelOrder/>}/>
                </Routes>
            </div>
            </div>
        </div>
    )
}

export default TrackOrder