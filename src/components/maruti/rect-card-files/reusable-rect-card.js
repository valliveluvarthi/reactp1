import React from "react";
import "./reusable-rect-card.scss";
const ReusableRectCardComponent = (props) => {
  const onMouseEnter = (event) => {
    console.log(event);
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null && props.object.url_path) {
      card_wrapper.style.backgroundImage = `url(${props.object.url_path})`;
    }
  };
  const onMouseLeave = (event) => {
    console.log(event);
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null) {
      card_wrapper.style.backgroundImage = "none";
    }
    if (
      card_wrapper !== null &&
      event.currentTarget.id.includes("ai") === true
    ) {
      card_wrapper.style.background = "#423F56";
    }
  };
  let element;
  if (props.object.type === "bot-development") {
    element = (
      <div
        className="card-wrapper"
        id={props.object.id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="colored-div"></div>
        <div className="card-content">
          <div className="card-title poppins-title-36">
            {props.object.title}
          </div>
          <div className="horizontal-line"></div>
          <div className="card-description">{props.object.description1}</div>
          <div className="card-description">{props.object.description2}</div>
          {props.object.knowmore_text && (
            <div className="know-more">
              <div className="know-more-red-text">
                <img
                  className="image-text"
                  src={props.object.know_more_red_text_svg}
                  alt="know more 1"
                />
                <img
                  className="image-arrow"
                  src={props.object.know_more_red_arrow_svg}
                  alt="know more 1"
                />
              </div>
              <div className="know-more-white-text">
                <img
                  className="image-text"
                  src={props.object.know_more_white_text_svg}
                  alt="know more 2"
                />
                <img
                  className="image-arrow"
                  src={props.object.know_more_white_arrow_svg}
                  alt="know more 2"
                />
              </div>
              <div className="know-more-text-decoration"></div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    element = (
      <div
        className="card-ai-wrapper"
        id={props.object.id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="colored-div-ai"></div>
        <div className="card-content-ai">
          <div className="card-title poppins-title-36">
            {props.object.title}
          </div>
          <div className="horizontal-line-ai"></div>
          <div className="card-description">{props.object.description1}</div>
          {props.object.knowmore_text && (
            <div className="know-more">
              <div className="know-more-ai-white-text">
                <img
                  className="image-text"
                  src={props.object.know_more_white_text_svg}
                  alt="know more 2"
                />
                <img
                  className="image-arrow"
                  src={props.object.know_more_white_arrow_svg}
                  alt="know more 2"
                />
              </div>
              <div className="know-more-text-decoration"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return element;
};
export default ReusableRectCardComponent;
