import React from "react";
import ColorPicker from "./color-picker";
const ColorPickerName = (props) => {
    return(
        <React.Fragment>
            {props.totalPickers.length > 0 && props.totalPickers.map((item,i) => {
            return (
              <div key={i}>
                <p className="p-text">{item.value}</p>
              </div>
            );
          })}
        </React.Fragment>
    );
}
export default ColorPickerName