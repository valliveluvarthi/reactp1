import React from "react";

const ColorPickers = (props) => {
  return (
    <React.Fragment>
      {props.element.map((i) => {
        return (
          <div key={i}>
            <input
              type="color"
              id={"favcolor" + i}
              name={"favcolor" + i}
              onChange={props.colorChangeHandler}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ColorPickers;
