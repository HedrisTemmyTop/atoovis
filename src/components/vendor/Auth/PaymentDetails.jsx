import React, { useState } from "react";

const PaymentDetail = ({ setValue, inputs, onchange }) => {
  const { 
    accountNumber,
    accountName,
    bank,
    card_number,
    expireDate,
    payout_frequency,
    cvv,
  } = inputs;
  const validateformButton = () => {
    if (
      accountNumber.length == 10 &&
      accountName &&
      bank &&
      card_number &&
      cvv &&
      expireDate
    ) {
      return false;
    } else {
      return true;
    }
  };
  const [accountNumberErr, setaccountNumberErr] = useState("");
  const [accountNameErr, seraccountNameErr] = useState("");
  const [card_numberErr, setcard_numberErr] = useState("");
  const [expireDateErr, setexpireDateErr] = useState("");
  const [cvvErr, setcvvErr] = useState("");
  const [bankErr, setbankErr] = useState("");
  const [payout_frequencyErr, setpayout_frequencyErr] = useState("");

  const validateform = () => {
    if (!accountName) {
      seraccountNameErr("Account  Name is required");
    } else if (!accountNumber) {
      setaccountNumberErr("Account Number is required");
    } else if (!bank) {
      setbankErr(" Bank Name is required");
    } else if (!payout_frequency) {
      setpayout_frequencyErr("Payout Frequency is required");
    } else if (!card_number) {
      setcard_numberErr("Card Number is required");
    } else if (!expireDate) {
      setexpireDateErr("Expiry Date is required");
    } else if (!cvv) {
      setcvvErr("CVV Number is required");
    }else if (accountNumber.length != 10) {
      setaccountNumberErr("Account Number is not valid");
    }
    else if (accountNumber.length == 10) {
      setaccountNumberErr("");
    }  
    else {
      setValue(6);
      // console.log("ffff");
    }
  };

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
        {validateformButton() == true && (
          <h3 style={{ color: "#1675B4" }}>Please fill all fields below! </h3>
        )}

        <form action="">
          <div className="lab">
            <label htmlFor="">Account Name</label>
            <input
              type="text"
              name="accountName"
              value={accountName}
              onChange={onchange}
            />
            {!accountName && (
              <small style={{ color: "red" }}>{accountNameErr}</small>
            )}
          </div>
          <div className="lab">
            <label htmlFor="">Account Number</label>
            <input
              type="number"
              name="accountNumber"
              value={accountNumber}
              onChange={onchange}
            />
            {accountNumberErr && (
              <small style={{ color: "red" }}>{accountNumberErr}</small>
            )}
          </div>
          <div className="lab">
            <label htmlFor="">Bank </label>
            <select name="bank" id="" className="selecct" onChange={onchange}>
              <option value="">Select Bank</option>
              <option value="Access Bank">Access Bank</option>
            </select>
            {!bank && <small style={{ color: "red" }}>{bankErr}</small>}
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
            {!payout_frequency && (
              <small style={{ color: "red" }}>{payout_frequencyErr}</small>
            )}
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
              type="number"
              name="card_number"
              id="card_number"
              value={card_number}
              onChange={onchange}
            />
            {!card_number && (
              <small style={{ color: "red" }}>{card_numberErr}</small>
            )}
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
              {!expireDate && (
                <small style={{ color: "red" }}>{expireDateErr}</small>
              )}
            </div>
            <div className="laby" style={{ marginLeft: 20 }}>
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                value={cvv}
                onChange={onchange}
              />
              {!cvv && <small style={{ color: "red" }}>{cvvErr}</small>}
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
                onClick={() => setValue(6)}
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
          </div>
        </form>
      </div>

      <div>faqs</div>
    </div>
  );
};

export default PaymentDetail;
