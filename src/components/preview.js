import React, { useState, useContext, useEffect } from "react";
import "./preview.scss";
const Preview = (props) => {
  console.log(props);
  const [urlValue, setUrlValue] = useState(props.formValue.url);
  const [titleValue, setTitleValue] = useState(props.formValue.title);
  const [bulletArr, setBulletArr] = useState(props.formValue.bulltePoints);
  const [buttonArr, setButtonArr] = useState(props.formValue.button);
  useEffect(() => {
    setUrlValue(props.formValue.url);
    setTitleValue(props.formValue.title);
    setBulletArr(props.formValue.bulltePoints);
    setButtonArr(props.formValue.button);
  }, [props]);

  return (
    <React.Fragment>
      <div className="preview-look">
        <div className="block-header">
          <h2>Preview</h2>
        </div>
        {urlValue && (
          <div className="title-text">
            <img src={urlValue} alt="Image"></img>
          </div>
        )}
        <div className="title-text">
          <p>{titleValue}</p>
        </div>
        <div>
          {bulletArr &&
            bulletArr.length > 0 &&
            bulletArr.map((item, i) => {
              return (
                <ul key={i}>
                  {item.value !== "" && (
                    <li>
                      <p>{item.value}</p>
                    </li>
                  )}
                </ul>
              );
            })}
        </div>
        <div>
          {buttonArr &&
            buttonArr.length > 0 &&
            buttonArr.map((item, i) => {
              return (
                <ul key={i} className="preview-btn-list">
                  <li>
                    <button className="preview-button">
                      {item.type + " " + `${i + 1}`}
                    </button>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Preview;
