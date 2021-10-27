import React, { useState, useEffect } from "react";
import Header from "./header";
import SearchTickets from "./search-tickets";
import FlightDeals from "./flight-deals";
import "./book-flight-tickets.scss";
const BookFlightTickets = () => {
  return (
    <div className="book-tickets-wrapper">
      <Header />
      <SearchTickets />
      <FlightDeals />
    </div>
  );
};
export default BookFlightTickets;
