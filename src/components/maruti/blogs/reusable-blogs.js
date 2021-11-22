import React, { useEffect } from "react";
import "./reusable-blogs.scss";
const ReusableBlogComponent = (props) => {
  const onLabelClick = () => {
    let btn = document.getElementById("all-btn");
    btn.classList.remove("all-btn-active");
  };
  const onAllLabelClick = () => {
    let btn = document.getElementById("all-btn");
    btn.classList.add("all-btn-active");
  };
  return (
    <React.Fragment>
      {props.title === "All" && (
        <button
          id="all-btn"
          className="all-btn all-btn-active"
          onClick={onAllLabelClick}
        >
          {props.title}
        </button>
      )}
      {props.title === "User Experience" && (
        <button className="blogs-btn blogs-btn-color" onClick={onLabelClick}>
          {props.title}
        </button>
      )}
      {props.title !== "All" && props.title !== "User Experience" && (
        <button
          className="blogs-btn blogs-btn-color blogs-btn-border"
          onClick={onLabelClick}
        >
          {props.title}
        </button>
      )}
    </React.Fragment>
  );
};

export default ReusableBlogComponent;
