import React from "react";
import '../../styles/BuyerSide/buyer.css'
import {FiEdit2} from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import Modal from 'react-modal';
const Delivery =()=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          borderRadius: '30px',
          padding: 40,
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  
  const [modalIsOpen, setIsOpen] = React.useState(  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <div className="bow">
            <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <h1>Delivery Address</h1>
                <h4>You have 1 saved address</h4>
                </div>
                <button onClick={openModal}>Add New Address</button>
            </div>

            <div className="john">
            <div>
                <h1>John Doe</h1>
                <h4>63 Adekunle Fajuyi way Ikeja GRA Lagos</h4>
                <p>08967352426416</p>
                </div>
                <div >
                    <div style={{color: '#4CC5D2', display: 'flex', alignItems: 'center'}}>
                        <FiEdit2 style={{marginTop: 15,}}n/>
                        <p style={{paddingLeft: 5, fontize: 16}}>Edit</p>
                    </div>
                    <div style={{color: '#CB444A', display: 'flex', alignItems: 'center'}}>
                        <RiDeleteBin5Line style={{marginTop: 15,}} />
                        <p style={{paddingLeft: 5, fontize: 16}}>Remove</p>
                    </div>
                </div>
            </div>
            <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
        {/* <SignIn/> */}
        {/* <NumberOtp/> */}
        {/* <EmailOtp/> */}
        {/* <Redirect/> */}
        {/* <ResetLink/> */}
        <div className="fort">
            <h1>Add New Address</h1>
            <form action="">
                <div className="for">
                <label htmlFor="">Country</label>
                <select name="" id="">
                    <option value="">one</option>
                </select>
                </div>
                <div className="for">
                <label htmlFor="">State</label>
                <select name="" id="">
                    <option value="">one</option>
                </select>
                </div>
                <div className="for">
                <label htmlFor="">City</label>
                <select name="" id="">
                    <option value="">one</option>
                </select>
                </div>
                <div className="for">
                <label htmlFor="">Street & House No.</label>
                <select name="" id="">
                    <option value="">one</option>
                </select>
                </div>
                <div className="for">
                <label htmlFor="">L.G.A</label>
                <select name="" id="">
                    <option value="">one</option>
                </select>
                </div>

               <div style={{display: 'flex', flexDirection: 'column'}}>
               <button className="fortt">Save Address</button> 
                <button onClick={closeModal} className="forttt">Cancel</button>
               </div>
            </form>
        </div>
     
      </Modal>
        </div>
    )
}

export default Delivery