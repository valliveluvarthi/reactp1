import React from "react";
import "./reusable-blogs.scss";
const ReusableImageBlogComponent = (props) => {
  return (
    <React.Fragment>
      <div className="image-div-wrapper blog-card style_prevu_kit slideanim slide" style={{ backgroundImage: `url(${props.img.url})` }}>
        <div className="resource_title_wrapper">
            <div className="blog-card-title">
                {props.img.title}
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReusableImageBlogComponent;
