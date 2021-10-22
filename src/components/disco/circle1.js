import React, { useState, useEffect } from "react";
import "./circles.scss";
const Circle1 = (props) => {
  useEffect(() => {
    console.log("arr changed");
  }, [props.colorArr]);

  return (
    // <div className="circles-content">
    <div>
      {console.log(props.colorValue)}
      {props.startValue &&
        props.colorValue && (
          <div
            className="circles"
            id="circles1"
            style={{ backgroundColor: `${props.colorValue}` }}
          />
        )}
    </div>
  );
};

export default Circle1;
