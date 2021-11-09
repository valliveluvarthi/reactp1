import React from "react";
import ReusableRectCardComponent from "./reusable-rect-card";
import "./reusable-rect-card.scss";

class RectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bot_development: [
        {
          bot_id: "rect-card-bot-1",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/03/bot-development-bg.png",
          title: "Chatbots",
          description1:
            "Maruti Techlabs offers industry-agnostic custom chatbot development services for customer support, lead generation, FAQs and more.",
          description2:
            "Integrate intelligent chatbots with existing set of tools across different channels.",
          knowmore_text: true,
          know_more_red_text_svg:
            "	https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
          know_more_red_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-arrow.svg",
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          bot_id: "rect-card-bot-2",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/03/bot-development-bg.png",
          title: "RPA",
          description1:
            "We put efficiency at the center of the cogwheel of your operational processes, with a virtual workforce, enabled by automation.",
          description2:
            "Learn how your business can transcend conventional rule-based processes & leverage the benefits of RPA.",
          knowmore_text: true,
          know_more_red_text_svg:
            "	https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
          know_more_red_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-arrow.svg",
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
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
