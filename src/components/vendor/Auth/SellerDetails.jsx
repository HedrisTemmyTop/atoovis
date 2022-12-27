import React from "react";
import "../../../styles/auth/lab.css";
import "../../../styles/auth/welcome.css";
const SellerDetail = ({ setValue, inputs, onchange }) => {
  const {
    seller_country,
    seller_address,
    offical_email_address,
    mobile_number,
    manufacural_or_brandOwnner,
  } = inputs;

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
          </div>
          <div className="lab">
            <label htmlFor="">Residential Address</label>
            <input
              type="text"
              name="seller_address"
              value={seller_address}
              onChange={onchange}
            />
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
          </div>
          <div className="lab">
            <label htmlFor="">Mobile Number</label>
            <input
              type="number"
              name="mobile_number"
              value={mobile_number}
              onChange={onchange}
            />
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
          >
            John Doe
          </h1>
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
              <input type="radio" name="owner" value="YES" onChange={onchange} />
              <p>Yes</p>
            </div>
            <div className="labb" style={{ marginLeft: 30 }}>
              <input type="radio" name="owner" value="NO" onChange={onchange}/>
              <p> No</p>
            </div>
          </div>

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
          <button
            onClick={() => setValue(5)}
            className="startbtn"
            style={{
              background: "#4CC5D2",
              color: "#fff",
              borderRadius: 100,
              marginTop: 20,
              height: 60,
            }}
          >
            Save and Continue
          </button>
        </form>
      </div>

      <div>faqs</div>
    </div>
  );
};

export default SellerDetail;
