import React from "react";
import "./reusable-rect-card.scss";
const ReusableRectCardComponent = (props) => {
  const onMouseEnter = (event) => {
    console.log(event);
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null && props.object.url_path) {
      console.log("in if");
      card_wrapper.style.backgroundImage = `url(${props.object.url_path})`;
    }
  };
  const onMouseLeave = (event) => {
    console.log(event);
    let card_wrapper = document.getElementById(event.currentTarget.id);
    if (card_wrapper !== null) {
      console.log("in if");
      card_wrapper.style.backgroundImage = "none";
    }
  };
  return (
    <div
      className="card-wrapper"
      id={props.object.bot_id}
      //   style={{ backgroundImage: `url(${props.object.url_path})` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="colored-div"></div>
    </div>
  );
};
export default ReusableRectCardComponent;
