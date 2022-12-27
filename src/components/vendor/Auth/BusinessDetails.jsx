import React, { useState } from "react";
import "../../../styles/auth/lab.css";
import map from "../../../assets/images/Header/Rectangle 9117.png";
import { MdLocationPin } from "react-icons/md";
import "../../../styles/auth/welcome.css";

const BusinessDetail = ({ setValue, onchange, inputs }) => {
  const {
    business_name,
    business_type,
    confirm_bussiness,
    cac_number,
    state,
    lga,
    business_address,
    business_email,
  } = inputs;
  return (
    <div>
      <div
        className="start2"
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
          Business Details
        </h1>
        <form action="">
          <div className="lab">
            <label htmlFor="">Business Name</label>
            <input
              type="text"
              value={business_name}
              name="business_name"
              onChange={onchange}
            />
          </div>
          <div className="lab">
            <label htmlFor="">Business Type</label>
            <input
              type="text"
              value={business_type}
              name="business_type"
              onChange={onchange}
            />
          </div>
          <div className="lab">
            <label htmlFor="">CAC Registration Number</label>
            <input
              type="text"
              value={cac_number}
              name="cac_number"
              onChange={onchange}
            />
          </div>
          <div className="lab">
            <label htmlFor="">State / Region</label>
            <select name="state" onChange={onchange} id="" className="selecct">
              <option value=""></option>
              <option value="Abuja">Federal Capital Territory</option>
            </select>
          </div>
          <div className="lab">
            <label htmlFor="">LGA</label>
            <select name="lga" onChange={onchange} id="" className="selecct">
              <option value=""></option>
              <option value="Gwagwalada">Gwagwalada</option>
            </select>
          </div>
          <div className="labbb">
            <div>
              <label htmlFor="">Business Address</label>
              <input
                type="text"
                value={business_address}
                name="business_address"
                onChange={onchange}
              />
            </div>
            <div className="ic">
              <MdLocationPin style={{ color: "#1B5958" }} />
            </div>
          </div>
          <div>
            <img src={map} alt="" />
          </div>
          <div className="labb">
            <input type="checkbox" />
            <p>
              I confirm my business address is correct, and I understand that
              this information cannot be changed till address verification is
              completed
            </p>
          </div>
          <div className="lab">
            <label htmlFor="">Business Email</label>
            <input
              type="email"
              name="business_email"
              value={business_email}
              onChange={onchange}
            />
          </div>

          <button
            onClick={() => setValue(4)}
            style={{
              background: "#4CC5D2",
              color: "#fff",
              borderRadius: 100,
              marginTop: 20,
              height: 60,
            }}
            className="startbtn"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetail;
