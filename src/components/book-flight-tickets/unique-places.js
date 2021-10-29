import React from "react";
import UniquePlace1 from "../../assets/unique-place1.jfif";
import UniquePlace2 from "../../assets/unique-place2.jfif";
import UniquePlace3 from "../../assets/unique-place3.jfif";
import "./uinique-places.scss";
const UniquePlaces = () => {
  return (
    <div className="div-placement">
      <div className="unique-places-text">
        <div className="text-stretch">
          <span>
            Explore unique{" "}
            <span className="unique-places-span">places to stay</span>
          </span>
        </div>
        <div></div>
        <div className="unique-div-text">
          <span>All &nbsp;</span>
          <span>&#8594;</span>
        </div>
      </div>
      <div className="unique-places-gallery">
        <div className="gallery__item gallery__item--1">
          <img src={UniquePlace1} className="gallery__img" alt="Image 1" />
        </div>
        <div className="gallery__item gallery__desc--1">
          <div className="unique-places-sub-cols-desc">
            <div className="unique-places-sub-cols-desc-subrow-1">
              <span>Stay among the atolls in <span className="unique-places-sub-cols-desc-subrow-1-highlight">Maldives</span></span>
            </div>
            <div className="unique-places-sub-cols-desc-subrow-2">
              <span>
                From the 2nd century AD, the islands were known as the 'Money
                Isles' due to the abundance of cowry shells, a currency of the
                early ages.
              </span>
            </div>
          </div>
        </div>
        <div className="gallery__item gallery__item--2">
          <img src={UniquePlace2} className="gallery__img" alt="Image 2" />
        </div>
        <div className="gallery__item gallery__desc--2">
          <div className="unique-places-sub-cols-desc">
            <div className="unique-places-sub-cols-desc-subrow-1">
              <span>Experience the Ourika Valley in <span className="unique-places-sub-cols-desc-subrow-1-highlight">Morocco</span></span>
            </div>
            <div className="unique-places-sub-cols-desc-subrow-2">
              <span>
                Morocco’s Hispano-Moorish architecture blends influences from
                Berber culture, Spain, and contemporary artistic currents in the
                Middle East.
              </span>
            </div>
          </div>
        </div>
        <div className="gallery__item gallery__item--3">
          <img src={UniquePlace3} className="gallery__img" alt="Image 3" />
        </div>
        <div className="gallery__item gallery__desc--3">
          <div className="unique-places-sub-cols-desc">
            <div className="unique-places-sub-cols-desc-subrow-1">
              <span>Live traditionally in <span className="unique-places-sub-cols-desc-subrow-1-highlight">Mongolia</span></span>
            </div>
            <div className="unique-places-sub-cols-desc-subrow-2">
              <span>
                Traditional Mongolian yurts consists of an angled latticework of
                wood or bamboo for walls, ribs, and a wheel.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-div">
            <span className="explore-span">Explore more stays</span>
      </div>
    </div>
  );
};
export default UniquePlaces;
