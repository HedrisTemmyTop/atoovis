import React from "react";
import '../../styles/BuyerSide/wallet.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '40%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
   


  };
  
const BankAccount = ()=>{

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
        <div className="wal">
            <div>
                <p>Bank Cards</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                {/* <h1>N0.00</h1> <BiShow style={{width: 30, height: 22}}/> */}
                </div>
            </div>
            <div className="your">
                <button onClick={handleOpen}>Add New Card</button>
            </div>
        </div>

     

        <div className="tog">
            <div>
                <h1>Reveal Card Details</h1>
                <p>Turn on button to see card details</p>
            </div>
            <div>
                toggle
            </div>
        </div>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <div className="boxss">
        <h1>Add Card Details</h1>
        <form action="">
            <div className="mem">
                <label htmlFor="">Account Name</label>
                <select name="" id="">
                    <option value="">UBA</option>
                </select>
            </div>
            <div className="mem">
                <label htmlFor="">Account Name</label>
                <select name="" id="">
                    <option value="">UBA</option>
                </select>
            </div>
            <div className="mem">
                <label htmlFor="">Account Name</label>
                <select name="" id="">
                    <option value="">UBA</option>
                </select>
            </div>
        </form>
    </div>
   
  </Box>
</Modal>
    </div>
    )
}

export default BankAccount