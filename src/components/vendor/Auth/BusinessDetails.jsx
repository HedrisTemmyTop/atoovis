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

  const [nameErr, setErrorName] = useState("");
  const [typeErr, settypeErr] = useState("");
  const [cacErr, setErrCac] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [lgaErr, setLgaErr] = useState("");
  const [businessEmailErr, setbusinessEmailErr] = useState("");
  const [businessAdressErr, setbusinessAdressErr] = useState("");

  const validateformButton = () => {
    if (
      business_name &&
      business_address &&
      business_email.includes("@") &&
      state &&
      lga &&
      business_type === "Individual"
    ) {
      return false;
    } else if (
      business_name &&
      business_address &&
      business_email.includes("@") &&
      state &&
      lga &&
      business_type === "Registered Business"
    ) {
      return false;
    } else {
      return true;
    }
  };
  const validateform = () => {
    if (!business_name) {
      setErrorName("Business name is required");
    } else if (!business_type) {
      settypeErr("Business type is required");
    } else if (!cac_number && business_type == "Registered Business") {
      setErrCac("Business number is required");
    } else if (!state) {
      setStateErr("State is required");
    } else if (!lga) {
      setLgaErr("Lga is required");
    } else if (!business_address) {
      setbusinessAdressErr("Business Address is required");
    } else if (!business_email) {
      setbusinessEmailErr("Business email is required");
    } else if (!business_email.includes("@")) {
      setbusinessEmailErr("Business Email is not valid");
    } else if (business_email.includes("@")) {
      setbusinessEmailErr("");
    } else {
      setValue(4);
      // console.log("ffff");
    }
  };

  // console.log(nameErr);

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
            {!business_name && (
              <small style={{ color: "red" }}>{nameErr}</small>
            )}
          </div>

          <div className="lab">
            <label htmlFor="business_type">Business Type</label>
            <select
              name="business_type"
              id="business_type"
              className="selecct"
              onChange={onchange}
            >
              <option value=""> Select a Type</option>
              <option value="Individual">Individual</option>
              <option value="Registered Business">Registered Business</option>
            </select>
            {!business_type && (
              <small style={{ color: "red" }}>{typeErr}</small>
            )}
          </div>

          {business_type != "Individual" && (
            <div className="lab">
              <label htmlFor="">CAC Registration Number</label>
              <input
                type="text"
                value={cac_number}
                name="cac_number"
                onChange={onchange}
              />
              {!business_type && (
                <small style={{ color: "red" }}>{cacErr}</small>
              )}
            </div>
          )}
          <div className="lab">
            <label htmlFor="">State / Region</label>
            <select name="state" onChange={onchange} id="" className="selecct">
              <option value=""></option>
              <option value="Abuja">Federal Capital Territory</option>
            </select>
            {!state && <small style={{ color: "red" }}>{stateErr}</small>}
          </div>
          <div className="lab">
            <label htmlFor="">LGA</label>
            <select name="lga" onChange={onchange} id="" className="selecct">
              <option value=""></option>
              <option value="Gwagwalada">Gwagwalada</option>
            </select>
            {!lga && <small style={{ color: "red" }}>{lgaErr}</small>}
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
              {!business_address && (
                <small style={{ color: "red" }}>{businessAdressErr}</small>
              )}
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
            {businessEmailErr && (
              <small style={{ color: "red" }}>{businessEmailErr}</small>
            )}
          </div>

          {validateformButton() == true ? (
            <button
              onClick={validateform}
              style={{
                background: "#4CC5D2",
                color: "#fff",
                borderRadius: 100,
                marginTop: 20,
                height: 60,
              }}
              type="button"
              className="startbtn"
            >
              Save and Continue
            </button>
          ) : (
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
          )}
        </form>
      </div>
    </div>
  );
};

export default BusinessDetail;
