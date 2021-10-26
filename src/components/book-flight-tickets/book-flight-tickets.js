import React, { useState, useEffect } from "react";
import Header from './header';
import SearchTickets from './search-tickets';
import "./book-flight-tickets.scss";
const BookFlightTickets = () => {
    return (
            <div className="book-tickets-wrapper">
                <Header/>
                <SearchTickets/>
            </div>
    );
}
export default BookFlightTickets;