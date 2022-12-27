import React from "react";

const Verification = ({ setValue, inputs, onchange }) => {

  return (
    <div style={{ display: "flex" }}>
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
          Verification
        </h1>
        <form action="">
          <div className="lab">
            <label htmlFor="">CAC Document</label>
            <input type="file" name="cac_document" onChange={onchange} />
          </div>

          <div className="lab">
            <label htmlFor="">Valid ID of Business Owner</label>
            <input type="file" name="business_owner_id" onChange={onchange} />
          </div>
          <div className="lab">
            <label htmlFor="">Bank Account Statement</label>
            <input type="file" name="bank_statement" onChange={onchange} />
          </div>
          <div className="lab">
            <label htmlFor="">Additional Document</label>
            <input type="file" name="additonal_document" onChange={onchange} />
          </div>

          <button
            className="startbtn"
            onClick={() => setValue(6)}
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
            className="startbtn"
            onClick={() => setValue(8)}
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

export default Verification;
