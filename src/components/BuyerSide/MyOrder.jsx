import React from "react";
import '../../styles/BuyerSide/buyer.css'
import wish from '../../assets/images/Header/order.png'
import Filter from "./Order/Filter";
import Sort from "./Order/Sort";
import {AiOutlineSearch} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'
import img from '../../assets/images/Header/Mask group.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 'auto',
    // padding: 20,
    // bgcolor: '#fff',
    // border: '2px solid #fff',
    // boxShadow: 24,
    // p: 4,
  };
const MyOrder =()=>{
   
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
        <div>
            <div  style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <div>
                <h1>My Orders</h1>
                <div>
                    <button>All</button>
                    <button>Unpaid <span>(3)</span></button>
                    <button>Processing <span>(0)</span></button>
                    <button>Shipped <span>(0)</span></button>
                    <button>Completed</button>
                </div>
                </div>
            </div>
            {/* <div className="boww bow">
            <img src={wish} alt="" />
            <h3>No Order History yet</h3>
            <p>You have not made any purchase recently</p>
            <button>Explore Product Categories</button>
           
        </div> */}

        <div className="sort">
            <div className="ser">
                <AiOutlineSearch style={{width: 40}}/>
                <input type="text"  placeholder="Search by name, date etc..."/>
            </div>
            <div style={{display: 'flex'}}>
                <Filter/>
                <Sort/>
                {/* <Filter/> */}
            </div>
        </div>

        <div className="bow">
            <div className="bow-content">
                <div className="pare">
                    <div className="paren">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={img} alt="" />
                            <div style={{marginLeft: 15}}>
                                <h1 >Sunlight Dishwashing Liquid Green 400ml</h1>
                                <h2>KYC Stores</h2>
                                <h3>N48,000 (1)</h3>
                            </div>
                        </div>
                    </div>
                    <div  className="pay-now">
                    <button>
                                    Pay Now
                                </button>
                                <div style={{display: 'flex', color: '#4CC5D2', alignItems: 'center', marginLeft: 40, fontSize: 16}}>
                                    <p>Remove</p>
                                    <RiDeleteBinLine style={{fontSize: 24, marginLeft: 5}}/>
                                </div>
                    </div>
                </div>
                <div className="pay-bottom">
                   <div>
                    <h3>Waiting for payment</h3>
                    <h4 onClick={handleOpen} style={{cursor:'pointer'}}>View order details</h4>
                    </div> 
                   <div>
                    <h2>Order date: <span>Nov 12, 2022</span></h2>
                    <h2>Order ID: <span>81545436526475729</span></h2>
                    </div>    
                </div>
            </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="pay-modal">
          <h6 >Order Details</h6>
          <div>
            <h2>Order ID <span>81545356456id</span></h2>
           <div>
           <h3>Product Name</h3>
           <h4>Status <span>Ready for Shipping</span></h4>
           </div>

           <div className="paren">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={img} alt="" />
                            <div style={{marginLeft: 15}}>
                                <h1 >Sunlight Dishwashing Liquid Green 400ml</h1>
                                <h2>KYC Stores</h2>
                                <h3>N48,000 (1)</h3>
                            </div>
                        </div>
                    </div>

          </div>
          <div style={{marginTop: 20}}>
          <div className="track-modal">
                <h2>ITEM PLACED ON</h2>
                <h2>November 12, 2022 | 10:30:15pm</h2>
            </div>
          <div className="track-modal">
                <h2>Payment Method</h2>
                <h2>Pay with Card</h2>
            </div>
            <div className="track-modal">
                <h3>TOTAL AMOUNT of items</h3>
                <h2>N273,000</h2>
            </div>
            <div className="track-modal">
                <h3>SHIPPING FEE</h3>
                <h2>N500</h2>
            </div>
            <div className="track-modal">
                <h3>TOTAL  AMOUNt</h3>
                <h2>N273,500</h2>
            </div>
          </div>
          <div>
            <div className="track-modal">
                <h2>Delivery Method</h2>
                <h2>Standard Door Delivery</h2>
            </div>
            <div className="track-modal">
                <h2>Estimated Delivery Date</h2>
                <h2>Nov 20, 2022 - Nov 24, 2022</h2>
            </div>
            <div className="track-modal">
                <h2>Shipping Address</h2>
                <h2>64 Oduduwa Way, Ikeja, Lagos</h2>
            </div>
          </div>
          <div style={{marginLeft: '50%'}}>
            <button className="cancel-item">Cancel Item</button>
            <button className="track-item">Track  My Item</button>
          </div>
          </div>
        </Box>
      </Modal>
        </div>
    )
}

export default MyOrder