import React from "react";
import "./reusable-blogs.scss";
const ReusableBlogComponent = (props) => {
    return(
            <React.Fragment>
                {
                    props.title === "All" && <button className="blogs-btn btn-active">{props.title}</button>
                }
                {
                    props.title !== "All" && <button className="blogs-btn">{props.title}</button>
                }
            </React.Fragment>
    );
}

export default ReusableBlogComponent;