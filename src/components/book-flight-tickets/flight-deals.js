import React, { useState, useEffect } from "react";
import FlightDealsPic1 from "../../assets/flight-deals-pic1.jfif";
import FlightDealsPic2 from "../../assets/flight-deals-pic2.jfif";
import FlightDealsPic3 from "../../assets/flight-deals-pic3.png";
import SinglePic from "../../assets/singlepic.jfif";
import "./flight-deals.scss";
const FlightDeals = () => {
  return (
    <React.Fragment>
      <div className="flight-deals-text">
        <div className="text-stretch">
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
      <div className="gallery">
        <div className="gallery__item gallery__item--1">
          <img src={FlightDealsPic1} className="gallery__img" alt="Image 1" />
        </div>
        <div className="gallery__item gallery__desc--1">
          <div className="hotel-deals-sub-cols-desc">
            <div className="hotel-deals-sub-cols-desc-subrow-1">
              <span>
                The Bund,{" "}
                <span className="hotel-deals-sub-cols-desc-subrow-1-highlight">
                  Shanghai
                </span>
              </span>
              <span>$598</span>
            </div>
            <div className="hotel-deals-sub-cols-desc-subrow-2">
              <span>China’s most international city</span>
            </div>
          </div>
        </div>
        <div className="gallery__item gallery__item--2">
          <img src={FlightDealsPic2} className="gallery__img" alt="Image 2" />
        </div>
        <div className="gallery__item gallery__desc--2">
          <div className="hotel-deals-sub-cols-desc">
            <div className="hotel-deals-sub-cols-desc-subrow-1">
              <span>
                Sydney Opera House,{" "}
                <span className="hotel-deals-sub-cols-desc-subrow-1-highlight">
                  Sydney
                </span>
              </span>
              <span>$981</span>
            </div>
            <div className="hotel-deals-sub-cols-desc-subrow-2">
              <span>Take a stroll along the famous harbor</span>
            </div>
          </div>
        </div>
        <div className="gallery__item gallery__item--3">
          <img src={FlightDealsPic3} className="gallery__img" alt="Image 3" />
        </div>
        <div className="gallery__item gallery__desc--3">
          <div className="hotel-deals-sub-cols-desc">
            <div className="hotel-deals-sub-cols-desc-subrow-1">
              <span>
                Kōdaiji Temple,{" "}
                <span className="hotel-deals-sub-cols-desc-subrow-1-highlight">
                  Kyoto
                </span>
              </span>
              <span>$633</span>
            </div>
            <div className="hotel-deals-sub-cols-desc-subrow-2">
              <span>Step back in time in the Gion district</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel-deals-singlepic">
        <img
          className="hotel-deals-singlepic-img"
          src={SinglePic}
          alt="Singlepic"
        />
        <div className="hotel-deals-sub-cols-desc">
          <div className="hotel-deals-sub-cols-desc-subrow-1">
            <span>
              Tsavo East National Park,{" "}
              <span className="hotel-deals-sub-cols-desc-subrow-1-highlight">
                Kenya
              </span>
            </span>
            <span>$1248</span>
          </div>
          <div className="hotel-deals-sub-cols-desc-subrow-2">
            <span>
              Named after the Tsavo River, and opened in April 1984, Tsavo East
              National Park is one of the oldest parks in Kenya. It is located
              in the semi-arid Taru Desert.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FlightDeals;
