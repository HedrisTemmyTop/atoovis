import React, {useState} from "react";
import '../../../styles/auth/summary.css'
import Modal from 'react-modal';
import put from '../../../assets/images/Header/Group 39722 (1).png'
const Summary =({setValue})=>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
        padding: 0,
          bottom: 'auto',
          borderRadius: 50,
          marginRight: '-50%',
         
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
    return(
        <div style={{display: 'flex'}}>
        <div className="summa" style={{height: 'auto', background: '#fff',   alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 32}}>Summary</h1>

            <div className="summary">
            <h1 style={{marginBottom: 10, textAlign: 'left', color: '#000', fontSize: 14, fontWeight: 800}}>Business Details</h1>
                <div className="summ">
                    <h2>Business Details</h2>
                    <h1>KK and Sons Nig. Ltd</h1>
                </div>
                <div className="summ">
                    <h2>Business Type</h2>
                    <h1>Registered Business</h1>
                </div>
                <div className="summ">
                    <h2>CAC Registration Number</h2>
                    <h1>RC 141234</h1>
                </div>
                <div className="summ">
                    <h2>State/Region</h2>
                    <h1>State/Regiond</h1>
                </div>
                <div className="summ">
                    <h2>LGA</h2>
                    <h1>Gwagwalada</h1>
                </div>
                <div className="summ">
                    <h2>Business Address</h2>
                    <h1>Shop 14, Elevate Plaza, Garki, Area 1, Abuja</h1>
                </div>
                <div className="summ">
                    <h2>Business Email</h2>
                    <h1>kkandsons@gmail.com</h1>
                </div>
            </div>

            <div className="summary">
            <h1 
            style={{marginBottom: 10, textAlign: 'left', color: '#000',
             fontSize: 14, fontWeight: 800}}>Seller Details</h1>
                <div className="summ">
                    <h2>Country</h2>
                    <h1>Nigeria</h1>
                </div>
                <div className="summ">
                    <h2>Residential Address</h2>
                    <h1>9 Sholanle Street, Garki, Abuja</h1>
                </div>
                <div className="summ">
                    <h2>Offical Email Address</h2>
                    <h1>jondoe@gmail.com</h1>
                </div>
                <div className="summ">
                    <h2>Mobile Number</h2>
                    <h1>07095645336</h1>
                </div>
                <div className="summ">
                    <h2>State/Region</h2>
                    <h1>Federal Capital Territory</h1>
                </div>
           
               
            </div>

            <div className="summary">
            <h1 
            style={{marginBottom: 10, textAlign: 'left', color: '#000',
             fontSize: 14, fontWeight: 800}}>Payment Details</h1>
                <div className="summ">
                    <h2>Account Name</h2>
                    <h1>KK and Sons Nig. Ltd</h1>
                </div>
                <div className="summ">
                    <h2>Account Number</h2>
                    <h1>0135624234</h1>
                </div>
                <div className="summ">
                    <h2>Bank</h2>
                    <h1>Providus Bank</h1>
                </div>
                <div className="summ">
                    <h2>Payout Frequency</h2>
                    <h1>Daily</h1>
                </div>
                <div className="summ">
                    <h2>Card Number</h2>
                    <h1>5645 5645 5645 5645 5645</h1>
                </div>
                <div className="summ">
                    <h2>Expiry Date</h2>
                    <h1>04/22</h1>
                </div>
                <div className="summ">
                    <h2>CVV</h2>
                    <h1>123</h1>
                </div>
               
            </div>


            <div className="summary">
            <h1 
            style={{marginBottom: 10, textAlign: 'left', color: '#000',
             fontSize: 14, fontWeight: 800}}>Store</h1>
                <div className="summ">
                    <h2>Store Name</h2>
                    <h1>KK and Sons Nig. Ltd</h1>
                </div>
                <div className="summ">
                    <h2>UPC’S</h2>
                    <h1>Yes</h1>
                </div>
                <div className="summ">
                    <h2>Manufacturer/ Brand Owner</h2>
                    <h1>Yes</h1>
                </div>
                <div className="summ">
                    <h2>Registered Trademark</h2>
                    <h1>Yes</h1>
                </div>
            
            </div>

            <div className="summary">
            <h1 
            style={{marginBottom: 10, textAlign: 'left', color: '#000',
             fontSize: 14, fontWeight: 800}}>Documents</h1>
                <div className="summ">
                    <h2>CAC Document</h2>
                    <h1>KK and Sons Nig. Ltd</h1>
                </div>
                <div className="summ">
                    <h2>ID of Owner</h2>
                    <h1>Yes</h1>
                </div>
                <div className="summ">
                    <h2>Bank Statement</h2>
                    <h1>Yes</h1>
                </div>
                <div className="summ">
                    <h2>Additional Document</h2>
                    <h1>Yes</h1>
                </div>
            
            </div>

             <button className="starttbtn" onClick={()=> setValue(7)} style={{
          color: '#fff',
          borderRadius: 100,
          borderColor: '#4CC5D2',
          marginTop: 20,
          color: '#4CC5D2',
          height: 60,
          }}>Previous</button>
           
          <button className="starttbtn" onClick={openModal} style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20,
          height: 60
          }}>Submit</button>
        
            
         
        </div>

        <div>
          faqs
        </div>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
        <div className="mode1">
                <h1>Thank you for your request</h1>
               <img src={put} alt="" />
                    
                    <p>We have recieved your information and will 
                        reach out to you for further
                         clarification with 2 working days</p>
                    <button className="starttbtn" onClick={()=> setValue(9)} style={{background: '#4CC5D2',
          color: '#fff',
          borderRadius: 100,
          marginTop: 20,
          height: 60
          }}>Submit</button>
        </div>

      </Modal>
     </div>
     
    )
}

export default Summary