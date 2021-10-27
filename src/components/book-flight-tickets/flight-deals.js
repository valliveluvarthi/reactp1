import React, { useState, useEffect } from "react";
import "./flight-deals.scss";
const FlightDeals = () => {
  return (
    <div className="flight-deals-wrapper">
      <div className="flight-deals-text">
        <div>
          <span>
            Find your next adventure with these{" "}
            <span className="flight-deals-span">flight deals</span>
          </span>
        </div>
        <div></div>
        <div className="div-text">
          <span>All &nbsp;</span>
          <span>&#8594;</span>
        </div>
      </div>
    </div>
  );
};
export default FlightDeals;
