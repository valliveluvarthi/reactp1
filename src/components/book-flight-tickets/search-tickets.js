import React, { useState, useEffect } from "react";
import "./search-tickets.scss";
const SearchTickets = () => {
  return (
    <div className="search-tickets-wrapper">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Its's more than</span>
        <span className="heading-primary--main moveup">just a trip</span>
      </h1>
      <div className="search-div">
        <div className="div-incommon">
          <div className="flight-departure">
            <svg
              width="32"
              height="25"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.29285 16.3155C4.02797 16.419 3.91945 16.7356 4.06513 16.9799L5.81319 19.9108C6.06359 20.3306 6.58081 20.5079 7.0361 20.3299L23.9381 13.723C24.7279 13.4143 25.1179 12.5237 24.8092 11.734C24.4883 10.913 23.5436 10.5302 22.7417 10.8961L17.7432 13.1773L10.773 6.77125C10.4838 6.50546 10.0685 6.4276 9.70266 6.5706C9.08963 6.81023 8.85636 7.55604 9.22358 8.10227L13.6983 14.7584L6.85554 17.8571L4.72413 16.3669C4.59802 16.2787 4.43618 16.2594 4.29285 16.3155ZM25.6776 23.4521H5.14764V25.0313H25.6776V23.4521Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <span className="div-incommon-text">From where?</span>
        </div>
        <div className="div-incommon">
          <div className="flight-departure">
            <svg
              width="33"
              height="25"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.34152 9.97884C7.07104 9.89096 6.78638 10.067 6.74415 10.3482L6.23752 13.723C6.16495 14.2065 6.45251 14.6715 6.91742 14.8225L24.1767 20.4304C24.9832 20.6925 25.8494 20.2511 26.1114 19.4446C26.3838 18.6063 25.896 17.7113 25.0439 17.4859L19.7322 16.0805L18.4041 6.70728C18.349 6.31838 18.0772 5.99483 17.7037 5.87345C17.0777 5.67006 16.4244 6.09886 16.362 6.7541L15.6019 14.7384L8.34571 12.7959L7.64239 10.2921C7.60078 10.1439 7.48787 10.0264 7.34152 9.97884ZM26.1776 23.4521H5.64758V25.0314H26.1776V23.4521Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <span className="div-incommon-text">Where to?</span>
        </div>
        <div className="div-incommon">
          <div className="flight-departure">
            <svg
              width="32"
              height="25"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.27778C10 5.84822 10.5858 5.5 11 5.5C11.4142 5.5 12 5.84822 12 6.27778V7.83333H10V6.27778Z"
                fill="#6E7491"
              />
              <path
                d="M20 6.27778C20 5.84822 20.5858 5.5 21 5.5C21.4142 5.5 22 5.84822 22 6.27778V7.83333H20V6.27778Z"
                fill="#6E7491"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 7.83333H7.75C7.33579 7.83333 7 8.18156 7 8.61111V25.7222C7 26.1518 7.33579 26.5 7.75 26.5H24.25C24.6642 26.5 25 26.1518 25 25.7222V8.61111C25 8.18156 24.6642 7.83333 24.25 7.83333H22H20H12H10ZM23.5 12.5H8.5V24.9444H23.5V12.5Z"
                fill="#6E7491"
              />
              <path
                d="M10 16C10 15.1716 10.6716 14.5 11.5 14.5C12.3284 14.5 13 15.1716 13 16C13 16.8284 12.3284 17.5 11.5 17.5C10.6716 17.5 10 16.8284 10 16Z"
                fill="#6E7491"
              />
              <path
                d="M22 19C22 18.1716 21.3284 17.5 20.5 17.5C19.6716 17.5 19 18.1716 19 19C19 19.8284 19.6716 20.5 20.5 20.5C21.3284 20.5 22 19.8284 22 19Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <span className="div-incommon-text">Depart - Return</span>
        </div>
        <div className="div-incommon">
          <div className="flight-departure">
            <svg
              width="32"
              height="25"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="11.5" r="4" fill="#6E7491" />
              <path
                d="M10 24.5C8.89543 24.5 7.97435 23.5907 8.24685 22.5202C9.12788 19.0595 12.265 16.5 16 16.5C19.735 16.5 22.8721 19.0595 23.7531 22.5202C24.0257 23.5907 23.1046 24.5 22 24.5H10Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <span className="div-incommon-text">1 adult</span>
        </div>
        <div className="div-incommon ticket-search-btn">Search</div>
      </div>
    </div>
  );
};
export default SearchTickets;
