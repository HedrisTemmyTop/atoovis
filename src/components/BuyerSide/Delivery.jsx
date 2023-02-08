import React, { useState, useEffect } from "react";
import "../../styles/BuyerSide/buyer.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "react-modal";
import axios from "axios";
import Loader from "../Loder/Loader";
import { useNavigate } from "react-router-dom";
const Delivery = () => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LGA, setLGA] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [stretNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [edit, setEdit] = useState(null);
  const [reload, setReload] = useState(true);
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (!token) {
      localStorage.setItem("authenticated", false);
      navigate("/");
    }
    setLoading(true);
    axios
      .get("https://atoovis-be.herokuapp.com/address", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setAddress(response.data.address);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [reload]);
  const editAdressHandler = (e, address) => {
    console.log(address);
    setIsOpen(true);
    setCity(address.city);
    setCountry(address.country);
    setStreetNumber(address.street_house_no);
    setLGA(address.lga);
    setState(address.state);
    setReload(!reload);
  };
  const updateAddressHandler = (e) => {
    e.preventDefault();
    const data = {
      user: userId,
      country: country,
      state: state,
      city: city,

      lga: LGA,
      street_house_no: stretNumber,
    };
    if (edit) {
      console.log("edittinngg...");
      axios
        .post("https://atoovis-be.herokuapp.com/address", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => window.location.reload())
        .catch((error) => {
          console.log(error);
          setError(error);
        });
      return;
    }
    axios
      .post("https://atoovis-be.herokuapp.com/address", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => window.location.reload())
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  const deleteAddressHandler = (id) => {
    axios
      .delete("https://atoovis-be.herokuapp.com/address/" + id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => setError(error));
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "30px",
      padding: 40,
      transform: "translate(-50%, -50%)",
    },
  };

  let content = null;
  if (loading) content = <Loader />;
  if (address)
    content = (
      <div className="bow">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>Delivery Address</h1>
            <h4>You have {address.length} saved address</h4>
          </div>
          <button
            onClick={() => {
              setEdit(false);
              openModal();
            }}
          >
            Add New Address
          </button>
        </div>
        {address.length > 0 ? (
          address.map((address) => {
            return (
              <div className="john" key={address._id}>
                <div>
                  <h1>John Doe</h1>
                  <h4>
                    {address.street_house_no} {address.city} {address.state}{" "}
                    {address.country}
                  </h4>
                  <p> {address.street_house_no}</p>
                </div>
                <div>
                  <div
                    style={{
                      color: "#4CC5D2",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FiEdit2 style={{ marginTop: 15 }} n />
                    <p
                      style={{ paddingLeft: 5, fontize: 16 }}
                      onClick={(e) => {
                        setEdit(true);
                        editAdressHandler(e, address);
                      }}
                    >
                      Edit
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#CB444A",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => deleteAddressHandler(address._id)}
                  >
                    <RiDeleteBin5Line style={{ marginTop: 15 }} />
                    <p style={{ paddingLeft: 5, fontize: 16 }}>Remove</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No address yet </div>
        )}

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
            <form action="" onSubmit={(e) => updateAddressHandler(e)}>
              <div className="for">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </div>
              <div className="for">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </div>
              <div className="for">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="for">
                <input
                  type="number"
                  value={stretNumber}
                  onChange={(e) => {
                    setStreetNumber(e.target.value);
                  }}
                />
              </div>
              <div className="for">
                <label htmlFor="">L.G.A</label>
                <input
                  type="text"
                  value={LGA}
                  onChange={(e) => {
                    setLGA(e.target.value);
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <button className="fortt">Save Address</button>
                <button onClick={closeModal} className="forttt">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  if (error) content = <div>Something went wrong...</div>;
  return content;
};

export default Delivery;
