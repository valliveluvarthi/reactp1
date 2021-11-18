import React, { useEffect } from "react";
import "./reusable-blogs.scss";
const ReusableBlogComponent = (props) => {
  useEffect(() => {
    let btn = document.getElementById("all-btn");
    if (btn) {
      btn.style.color = "#ffffff";
      btn.style.backgroundColor = "#f05444";
    }
  });
  const onLabelClick = () => {
    let btn = document.getElementById("all-btn");
    btn.style.backgroundColor = "";
    btn.style.color = "#000000";
  };
  const onAllLabelClick = () => {
    let btn = document.getElementById("all-btn");
    btn.style.color = "#ffffff";
  };
  return (
    <React.Fragment>
      {props.title === "All" && (
        <button
          id="all-btn"
          className="blogs-btn blogs-btn-color blogs-btn-border"
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
