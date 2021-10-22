import React, { useState, useEffect } from "react";
import "./circles.scss";
const Circles = (props) => {

  useEffect(() => {
    console.log("arr changed");
  }, [props.colorArr]);

  return (
    <div className="circles-content">
      {console.log(props.startValue)}
      {props.startValue &&
      props.colorArr &&
        props.colorArr.length > 0 &&
        props.colorArr[0] !== undefined &&
        props.element.map((i) => {
          return (
            <React.Fragment key={i}>
              {props.colorArr.length > 0 && <div className="circles" style={{ backgroundColor: `${props.colorArr[i]}` }} />}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Circles;
