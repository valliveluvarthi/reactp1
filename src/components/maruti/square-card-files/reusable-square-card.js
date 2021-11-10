import React from "react";

const ReusableSquareCardComponent = (props) => {
  const onMouseEnter = (event) => {
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null && props.object.url_path_hover) {
      card_wrapper.src = props.object.url_path_hover;
    }
  };
  const onMouseLeave = (event) => {
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null && props.object.url_path) {
      card_wrapper.src = props.object.url_path;
    }
  };
  const mouseOnContent = (event) => {
    let backgrnd_img_id = "square-card-" + event.currentTarget.id;
    let background_img_elemt = document.getElementById(backgrnd_img_id);
    if (background_img_elemt !== null && props.object.url_path_hover) {
      background_img_elemt.src = props.object.url_path_hover;
    }
  };
  const mouseExitContent = (event) => {
    let backgrnd_img_id = "square-card-" + event.currentTarget.id;
    let background_img_elemt = document.getElementById(backgrnd_img_id);
    if (background_img_elemt !== null && props.object.url_path) {
      background_img_elemt.src = props.object.url_path;
    }
  };
  return (
    <div className="sq-card-wrapper">
      <img
        id={props.object.id}
        className="background-image"
        src={props.object.url_path}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div
        className="sq-card-content"
        id={props.object.s_no}
        onMouseEnter={mouseOnContent}
        onMouseLeave={mouseExitContent}
      >
        <div className="sq-card-title poppins-title-24">
          {props.object.title}
        </div>
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
};
export default ReusableSquareCardComponent;
