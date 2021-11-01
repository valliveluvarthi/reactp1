import React, { useState, useEffect } from "react";
import Header from "./header";
import SearchTickets from "./search-tickets";
import FlightDeals from "./flight-deals";
import UniquePlaces from './unique-places';
import Comments from './comments';
import Footer from './footer';
import "./book-flight-tickets.scss";

const BookFlightTickets = () => {
  return (
    <div className="book-tickets-wrapper">
      <Header />
      <SearchTickets />
      <FlightDeals />
      <UniquePlaces/>
      <Comments/>
      <Footer/>
    </div>
  );
};
export default BookFlightTickets;
