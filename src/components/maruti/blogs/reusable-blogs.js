import React from "react";
import "./reusable-blogs.scss";
const ReusableBlogComponent = (props) => {
    return(
            <React.Fragment>
                {
                    props.title === "All" && <button className="btn-active blogs-btn">{props.title}</button>
                }
                {
                    props.title !== "All" && <button className="blogs-btn blogs-btn-color">{props.title}</button>
                }
            </React.Fragment>
    );
}

export default ReusableBlogComponent;