import React from "react";

const PaymentDetail = ({ setValue, inputs, onchange }) => {
  const { accountNumber, accountName, bank, card_number, expireDate, cvv } =
    inputs;
  const validateform = () => {
      if(accountNumber && accountName && bank && 
        card_number && cvv && expireDate)  {
          return false
    }
      else{
        return true
      }
  }
  return (
    <div style={{ display: "flex" }}>
      <div
        className="start"
        style={{
          padding: 40,
          height: "auto",
          background: "#fff",
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
          Payment Details
        </h1>
        {validateform() == true && <h3 style={{"color":"#1675B4"}}>Please Provide Information to all fields below! </h3>}

        <form action="">
          <div className="lab">
            <label htmlFor="">Account Name</label>
            <input
              type="text"
              name="accountName"
              value={accountName}
              onChange={onchange}
            />
          </div>
          <div className="lab">
            <label htmlFor="">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={accountNumber}
              onChange={onchange}
            />
          </div>
          <div className="lab">
            <label htmlFor="">Bank </label>
            <select name="bank" id="" className="selecct" onChange={onchange}>
              <option value="">Select Bank</option>
              <option value="Access Bank">Access Bank</option>
            </select>
          </div>
          <div className="lab">
            <label htmlFor="">Payout Frequency </label>
            <select
              name="payout_frequency"
              id=""
              className="selecct"
              onChange={onchange}
            >
              <option value="">Select a payout period</option>
              <option value="7">7</option>
            </select>
          </div>

          <div className="lab">
            <h1
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#000",
                textAlign: "left",
              }}
            >
              Credit Card details
            </h1>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#000",
                textAlign: "left",
              }}
            >
              A valid Credit Card Number which will be used to pay your monthly
              fee
            </p>
          </div>
          <div className="lab">
            <label htmlFor="card_number">Card Number</label>
            <input
              type="text"
              name="card_number"
              id="card_number"
              value={card_number}
              onChange={onchange}
            />
          </div>

          <div style={{ display: "flex" }} className="leff">
            <div className="laby">
              <label htmlFor="expireDate">Expiry Date</label>
              <input
                type="text"
                name="expireDate"
                id="expireDate"
                value={expireDate}
                onChange={onchange}
              />
            </div>
            <div className="laby" style={{ marginLeft: 20 }}>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={cvv}
                onChange={onchange}
              />
            </div>
          </div>

          <div className="leff">
            <button
              className="startbtn"
              onClick={() => setValue(5)}
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
            disabled={validateform()}
              className="startbtn"
              onClick={() => setValue(6)}
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
          </div>
        </form>
      </div>

      <div>faqs</div>
    </div>
  );
};

export default PaymentDetail;
