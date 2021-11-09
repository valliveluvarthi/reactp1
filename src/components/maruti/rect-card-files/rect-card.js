import React from "react";
import ReusableRectCardComponent from "./reusable-rect-card";
import "./reusable-rect-card.scss";

class RectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bot_development: [
        {
          bot_id : "rect-card-bot-1",
          url_path: "https://cdn-gcp.marutitech.com/wp-media/2019/03/bot-development-bg.png",
          title: "Chatbots",
          title_text_underline: "#000000",
          title_text_underline_onhover: "#ffffff",
          description1:
            "Maruti Techlabs offers industry-agnostic custom chatbot development services for customer support, lead generation, FAQs and more.",
          description2:
            "Integrate intelligent chatbots with existing set of tools across different channels.",
          description_color: "#000000",
          description_color_onhover: "#ffffff",
          knowmore_text: true,
          knowmore_text_color: "#f15444",
          knowmore_text_color_onhover: "#ffffff",
        },
        {
          bot_id : "rect-card-bot-2",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/03/bot-development-bg.png",
          title: "RPA",
          title_text_underline: "#000000",
          title_text_underline_onhover: "#ffffff",
          description1:
            "We put efficiency at the center of the cogwheel of your operational processes, with a virtual workforce, enabled by automation.",
          description2:
            "Learn how your business can transcend conventional rule-based processes & leverage the benefits of RPA.",
          description_color: "#000000",
          description_color_onhover: "#ffffff",
          knowmore_text: true,
          knowmore_text_color: "#f15444",
          knowmore_text_color_onhover: "#ffffff",
        },
      ],
    };
  }
  render() {
    return (
      <div className="packed-div">
        {this.state.bot_development.length > 0 &&
          this.state.bot_development.map((item, i) => {
            return <ReusableRectCardComponent key={i} object={item} />;
          })}
      </div>
    );
  }
}

export default RectCardComponent;
