import React, { useState } from "react";
import "../../../styles/auth/lab.css";
import "../../../styles/auth/welcome.css";
const SellerDetail = ({ setValue, inputs, onchange }) => {
  const {
    seller_country,
    seller_address,
    offical_email_address,
    mobile_number,
    manufacural_or_brandOwnner,
    owner,
  } = inputs;
  const [countryErr, setcountryErr] = useState("");
  const [addressErr, setErradddres] = useState("");
  const [offErr, setOffErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [ownerErr, setownerErr] = useState("");

  const validateform = () => {
    if (!seller_country) {
      setcountryErr("Seller Country is required");
    } else if (!seller_address) {
      setErradddres("Residential Address is required");
    } else if (!offical_email_address) {
      setOffErr("Offical Email Address required");
    } else if (!offical_email_address.includes("@")) {
      setOffErr("Offical Email Address is not valid");
    } else if (!mobile_number) {
      setMobileErr("Mobile Number is required");
    } else if (!owner) {
      setownerErr("Business owner is required");
    }else if (offical_email_address.includes("@")) {
      setOffErr("");
    }  
    else {
      setValue(4);
      // console.log("ffff");
    }
  };

  const validateformButton = () => {
    if (
      seller_country &&
      seller_address &&
      offical_email_address.includes("@") &&
      mobile_number &&
      owner
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        className="start2"
        style={{
          height: "auto",
          borderRadius: 27,
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
          Seller Details
        </h1>
        {validateformButton() == true && (
          <h3 style={{ color: "#1675B4" }}>Please fill all fields below! </h3>
        )}

        <form action="">
          <div className="lab">
            <label htmlFor="seller_country">Country</label>
            <select
              name="seller_country"
              id="seller_country"
              className="selecct"
              onChange={onchange}
            >
              <option value=""> Select a Country</option>
              <option value="Nigeria">Nigeria</option>
            </select>
            {!seller_country && (
              <small style={{ color: "red" }}>{countryErr}</small>
            )}
          </div>
          <div className="lab">
            <label htmlFor="">Residential Address</label>
            <input
              type="text"
              name="seller_address"
              value={seller_address}
              onChange={onchange}
            />
            {!seller_address && (
              <small style={{ color: "red" }}>{addressErr}</small>
            )}
          </div>
          <div className="labb">
            <p>+</p>
            <p>Add another address</p>
          </div>
          <div className="lab">
            <label htmlFor="">Official Email Address</label>
            <input
              type="text"
              name="offical_email_address"
              value={offical_email_address}
              onChange={onchange}
            />
            {offErr && <small style={{ color: "red" }}>{offErr}</small>}
          </div>
          <div className="lab">
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              name="mobile_number"
              value={mobile_number}
              onChange={onchange}
            />
            {!mobileErr && <small style={{ color: "red" }}>{mobileErr}</small>}
          </div>
          <div className="labb">
            <p>+</p>
            <p>Add another address</p>
          </div>

          <h1
            style={{
              color: "#000",
              textAlign: "left",
              fontSize: 14,
            }}
          ></h1>
          <div className="labb">
            <input type="checkbox" />
            <p>Is a beneficial owner of the business</p>
          </div>
          <div className="labb">
            <input type="checkbox" />
            <p> Is a legal representative of the business</p>
          </div>

          <div style={{ display: "flex" }}>
            <div className="labb">
              <input
                type="radio"
                name="owner"
                value="YES"
                onChange={onchange}
              />
              <p>Yes</p>
            </div>
            <div className="labb" style={{ marginLeft: 30 }}>
              <input type="radio" name="owner" value="NO" onChange={onchange} />
              <p> No</p>
            </div>
          </div>
          {!owner && <small style={{ color: "red" }}>{ownerErr}</small>}

          <button
            className="startbtn"
            onClick={() => setValue(4)}
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
              onClick={() => setValue(5)}
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

      <div>faqs</div>
    </div>
  );
};

export default SellerDetail;
