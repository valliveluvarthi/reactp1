import React from "react";
import ReusableRectCardComponent from "./reusable-rect-card";
import "./reusable-rect-card.scss";

class RectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bot_development: [
        {
          type: "bot-development",
          id: "rect-card-bot-1",
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
          type: "bot-development",
          id: "rect-card-bot-2",
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
      ai: [
        {
          type: "artificial-intelligence",
          id: "rect-card-ai-1",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/03/artificial-intelligence-bg.png",
          title: "NLP",
          description1:
            "Process, assess & interpret unstructured data to operate effectively by leveraging our Natural Language Processing services. Add conversational intelligence to your apps & products to understand linguistics better with NLP.",
          knowmore_text: true,
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          type: "artificial-intelligence",
          id: "rect-card-ai-2",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/03/artificial-intelligence-bg.png",
          title: "Computer Vision",
          description1:
            "We assist enterprises automate applications to recognize, capture & extract rich data from images, process visual data & create state-of-the-art computer vision models that fit perfectly with their use cases.",
          knowmore_text: true,
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          type: "artificial-intelligence",
          id: "rect-card-ai-3",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/03/artificial-intelligence-bg.png",
          title: "Machine Learning",
          description1:
            "We help enterprises process high volume data, enable faster decision making, quicker anomaly detection, business process automation along with solving complex challenges through our Machine Learning services.",
          knowmore_text: true,
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
      <React.Fragment>
        <div className="packed-div">
          {this.state.bot_development.length > 0 &&
            this.state.bot_development.map((item, i) => {
              return <ReusableRectCardComponent key={i} object={item} />;
            })}
        </div>
        <div className="packed-div">
          {this.state.ai.length > 0 &&
            this.state.ai.map((item, i) => {
              return <ReusableRectCardComponent key={i} object={item} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default RectCardComponent;
