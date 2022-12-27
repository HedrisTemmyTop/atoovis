import React, { useState } from "react";
import "../../../styles/auth/summary.css";
import Modal from "react-modal";
import put from "../../../assets/images/Header/Group 39722 (1).png";
const Summary = ({ setValue, data, fileData }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      padding: 0,
      bottom: "auto",
      borderRadius: 50,
      marginRight: "-50%",

      transform: "translate(-50%, -50%)",
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

  console.log("data ====", data);
  console.log("fileData ====", fileData);

  const {
    business_name,
    business_type,
    confirm_bussiness,
    cac_number,
    state,
    lga,
    business_address,
    business_email,
    seller_country,
    seller_address,
    offical_email_address,
    mobile_number,
    accountNumber,
    accountName,
    bank,
    card_number,
    expireDate,
    payout_frequency,
    cvv,
    storeName,
    ups,
    owner,
    registered_trademark,
  } = data;

  const {
    cac_document,
    business_owner_id,
    bank_statement,
    additonal_document,
  } = fileData;

  return (
    <div style={{ display: "flex" }}>
      <div
        className="summa"
        style={{
          height: "auto",
          background: "#fff",
          alignItems: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            marginBottom: 10,
            textAlign: "left",
            color: "#000",
            fontSize: 32,
          }}
        >
          Summary
        </h1>

        <div className="summary">
          <h1
            style={{
              marginBottom: 10,
              textAlign: "left",
              color: "#000",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Business Details
          </h1>
          <div className="summ">
            <h2>Business Details</h2>
            <h1>{business_name}</h1>
          </div>
          <div className="summ">
            <h2>Business Type</h2>
            <h1>{business_type}</h1>
          </div>
          <div className="summ">
            <h2>CAC Registration Number</h2>
            <h1>{cac_number}</h1>
          </div>
          <div className="summ">
            <h2>State/Region</h2>
            <h1>{state}</h1>
          </div>
          <div className="summ">
            <h2>LGA</h2>
            <h1>{lga}</h1>
          </div>
          <div className="summ">
            <h2>Business Address</h2>
            <h1>{business_address}</h1>
          </div>
          <div className="summ">
            <h2>Business Email</h2>
            <h1>{business_email}</h1>
          </div>
        </div>

        <div className="summary">
          <h1
            style={{
              marginBottom: 10,
              textAlign: "left",
              color: "#000",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Seller Details
          </h1>
          <div className="summ">
            <h2>Country</h2>
            <h1>{seller_country}</h1>
          </div>
          <div className="summ">
            <h2>Residential Address</h2>
            <h1>{seller_address}</h1>
          </div>
          <div className="summ">
            <h2>Offical Email Address</h2>
            <h1>{offical_email_address}</h1>
          </div>
          <div className="summ">
            <h2>Mobile Number</h2>
            <h1>{mobile_number}</h1>
          </div>
          <div className="summ">
            <h2>State/Region</h2>
            <h1>{state}</h1>
          </div>
        </div>

        <div className="summary">
          <h1
            style={{
              marginBottom: 10,
              textAlign: "left",
              color: "#000",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Payment Details
          </h1>
          <div className="summ">
            <h2>Account Name</h2>
            <h1>{accountName}</h1>
          </div>
          <div className="summ">
            <h2>Account Number</h2>
            <h1>{accountNumber}</h1>
          </div>
          <div className="summ">
            <h2>Bank</h2>
            <h1>{bank}</h1>
          </div>
          <div className="summ">
            <h2>Payout Frequency</h2>
            <h1>{payout_frequency}</h1>
          </div>
          <div className="summ">
            <h2>Card Number</h2>
            <h1>{card_number}</h1>
          </div>
          <div className="summ">
            <h2>Expiry Date</h2>
            <h1>{expireDate}</h1>
          </div>
          <div className="summ">
            <h2>CVV</h2>
            <h1>{cvv}</h1>
          </div>
        </div>

        <div className="summary">
          <h1
            style={{
              marginBottom: 10,
              textAlign: "left",
              color: "#000",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Store
          </h1>
          <div className="summ">
            <h2>Store Name</h2>
            <h1>{storeName}</h1>
          </div>
          <div className="summ">
            <h2>UPC’S</h2>
            <h1>{ups}</h1>
          </div>
          <div className="summ">
            <h2>Manufacturer/ Brand Owner</h2>
            <h1>{owner}</h1>
          </div>
          <div className="summ">
            <h2>Registered Trademark</h2>
            <h1>{registered_trademark}</h1>
          </div>
        </div>

        <div className="summary">
          <h1
            style={{
              marginBottom: 10,
              textAlign: "left",
              color: "#000",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Documents
          </h1>
          <div className="summ">
            <h2>CAC Document</h2>
            <h1>{cac_document != "" ? cac_document[0].name : null}</h1>
          </div>
          <div className="summ">
            <h2>ID of Owner</h2>
            <h1>{business_owner_id != "" ?  business_owner_id[0].name : null}</h1>
          </div>
          <div className="summ">
            <h2>Bank Statement</h2>
            <h1>{bank_statement != "" ? bank_statement[0].name : null}</h1>
          </div>
          <div className="summ">
            <h2>Additional Document</h2>
            <h1>{additonal_document != "" ? additonal_document[0].name: null}</h1>
          </div>
        </div>

        <button
          className="starttbtn"
          onClick={() => setValue(7)}
          style={{
            color: "#fff",
            borderRadius: 100,
            borderColor: "#4CC5D2",
            marginTop: 20,
            color: "#4CC5D2",
            height: 60,
          }}
        >
          Previous
        </button>

        <button
          className="starttbtn"
          onClick={openModal}
          style={{
            background: "#4CC5D2",
            color: "#fff",
            borderRadius: 100,
            marginTop: 20,
            height: 60,
          }}
        >
          Submit
        </button>
      </div>

      <div>faqs</div>
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

          <p>
            We have recieved your information and will reach out to you for
            further clarification with 2 working days
          </p>
          <button
            className="starttbtn"
            onClick={() => setValue(9)}
            style={{
              background: "#4CC5D2",
              color: "#fff",
              borderRadius: 100,
              marginTop: 20,
              height: 60,
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Summary;
