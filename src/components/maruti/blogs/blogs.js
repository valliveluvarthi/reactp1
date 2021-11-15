import React from "react";
import ReusableBlogComponent from "./reusable-blogs";
import "./reusable-blogs.scss";

class BlogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        "All",
        "Artificial Intelligence and Machine Learning",
        "Blockchain",
        "Bot Development",
        "Business Strategy",
        "Chatbot",
        "Data Analytics and Business Intelligence",
        "DevOps",
        "Low Code No Code",
        "Mobile and Web Application Development",
        "Robotic Process Automation",
        "Salesforce Development",
        "Software Development Practices",
        "Uncategorized",
        "User Experience",
      ],
    };
  }
  render() {
    return (
      <div className="blogs_wrapper">
        <div className="packed_blogs">
          {this.state.titles.length > 0 &&
            this.state.titles.map((item, i) => {
              console.log(item);
              return <ReusableBlogComponent key={i} title={item} />;
            })}
        </div>
      </div>
    );
  }
}
export default BlogComponent;
