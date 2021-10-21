import React from "react";
import "./circles.scss";
const Circles = (props) => {
  console.log(props.element);
  return (
    <div className="circles-content">
      {props.startValue &&
        props.colorArr.length > 0 &&
        props.colorArr[0] !== undefined &&
        props.element.map((i) => {
          return (
            <React.Fragment key={i}>
              {props.colorArr.length > 0 && <div className="circles" />}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Circles;
