import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import OrderTrack from "../../components/Track/OrderTrack";
import PlaceOrder from "../../components/Track/PlaceOrder";
import CancelOrder from "../../components/Track/CancelOrder";
import "../../styles/BuyerSide/track.css";
import { Route, Routes, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useState } from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const TrackOrder = () => {
  const [activeVideo, setActiveVideo] = useState({
    place: true,
    track: false,
    cancel: false,
  });
  let content = null;
  if (activeVideo.place) content = <PlaceOrder />;
  if (activeVideo.track) content = <OrderTrack />;
  if (activeVideo.cancel) content = <CancelOrder />;
  return (
    <div>
      <Header />
      <Navigation />
      <div className="track-order__wrapper">
        <div className="new-order">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </div>
          <div className="place-order">
            <ul>
              <li
                className={
                  activeVideo.place ? " track-order__btn--active" : null
                }
              >
                <button
                  className="track-order__btn"
                  onClick={() => {
                    setActiveVideo({
                      place: true,
                      track: false,
                      cancel: false,
                    });
                  }}
                >
                  <span> Place Order</span>
                </button>
              </li>

              <li
                className={
                  activeVideo.track ? "track-order__btn--active" : null
                }
              >
                <button
                  className="track-order__btn"
                  onClick={() => {
                    setActiveVideo({
                      place: false,
                      track: true,
                      cancel: false,
                    });
                  }}
                >
                  <span> Track Order</span>
                </button>
              </li>
              <li
                className={
                  activeVideo.cancel ? "track-order__btn--active" : null
                }
              >
                <button
                  className="track-order__btn"
                  onClick={() => {
                    setActiveVideo({
                      place: false,
                      track: false,
                      cancel: true,
                    });
                  }}
                >
                  <span> Order cancellation</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="place-route">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
