import React from "react";

const ReusableImageComponent = (props) => {
  let element;
  if (props.object.type === "desc_driven_comp") {
    element = (
      <div
        className="img-comp-wrapper desc-driven-wrapper"
        style={{
          backgroundColor: props.object.background,
        }}
      >
        <div className="desc-driven-title">{props.object.title}</div>
        <div className="desc-driven-desc">{props.object.description}</div>
        <div className="desc-advantages">
          {props.object.advantages.length > 0 &&
            props.object.advantages.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <img
                    className="adv-img"
                    src={item.img_url}
                    alt={item.img_desc}
                  />
                  <div className="adv-desc">{item.img_desc}</div>
                </React.Fragment>
              );
            })}
        </div>
        <img
          className="desc-driven-img"
          src={props.object.url_path}
          alt="Wotnot Img"
        ></img>
        <div className="desc-learn-more-btn btn-content">Learn More</div>
      </div>
    );
  } else if (props.object.type === "img_driven_comp") {
    element = (
      <div
        className="img-comp-wrapper img-driven-wrapper"
        style={{
          backgroundColor: props.object.background,
        }}
      >
        <div className="img-driven-title">{props.object.title}</div>
        <div className="img-driven-desc">{props.object.description}</div>
        <div className="img-advantages">
          {props.object.advantages.length > 0 &&
            props.object.advantages.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <img
                    className="adv-img"
                    src={item.img_url}
                    alt={item.img_desc}
                  />
                  <div className="adv-desc">{item.img_desc}</div>
                </React.Fragment>
              );
            })}
        </div>
        <img
          className="img-driven-img"
          src={props.object.url_path}
          alt="Wotnot Img"
        ></img>
        <div className="img-learn-more-btn btn-content">Learn More</div>
      </div>
    );
  }
  return element;
};
export default ReusableImageComponent;
