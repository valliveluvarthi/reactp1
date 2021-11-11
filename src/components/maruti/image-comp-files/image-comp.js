import React from "react";
import ReusableImageComponent from "./reusable-image-comp";
import "./reusable-image-comp.scss";
class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_driven_comp: [
        {
          type: "desc_driven_comp",
          title: "WotNot",
          background : "#ffffff",background : "#ffffff",
          description:
            "WotNot is a leading chatbot development platform that helps you scale how you sell, market or support with custom chatbots. Address manual tasks & allow demand generation or support teams to do what they do best.",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/10/80c48941-wotnot-hero-compressor.png",
          learn_more: true,
          advantages: [
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/06/MT__Increased-ROIs.svg",
              img_desc: "Increased ROIs",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/05/MT_Platform-agnostic-Ai-flow.svg",
              img_desc: "Platform-agnostic AI Flow",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/06/Lead-generation-v1.svg",
              img_desc: "Lead Generation",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/06/MT__Always-on.svg",
              img_desc: "Always On - 24/7",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Multilingual-fluency.svg",
              img_desc: "Multilingual Fluency",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/06/MT__Personalized-Interaction.svg",
              img_desc: "Personalized Interactions",
            },
          ],
        },
        {
          type: "img_driven_comp",
          title: "Alertly",
          background : "#383838",
          description:
            "Use intelligent automation to automate your JIRA alerts for Slack. If you use JIRA for project management, integrate Alertly to get status updates & carry out asynchronous stand up meetings - without leaving Slack!",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/10/05512317-alertly-hero-img-compressor.png",
          learn_more: true,
          advantages: [
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_manage-time-and-pace.svg",
              img_desc: "Manage Time and Pace",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Custom-alerts-for-one-and-all.svg",
              img_desc: "Custom alerts for one and all",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Actionable-alerts.svg",
              img_desc: "Actionable Alerts",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Track-Milestone.svg",
              img_desc: "Track Milestones",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Project-overview-and-visibility.svg",
              img_desc: "Marketplace Synchronization",
            },
            {
              img_url:
                "https://cdn-gcp.marutitech.com/wp-media/2019/11/MT_Team-collaboration.svg",
              img_desc: "Easy Team Management",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="img-packed-div">
          {this.state.image_driven_comp.length > 0 &&
            this.state.image_driven_comp.map((item, i) => {
              return <ReusableImageComponent key={i} object={item} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}
export default ImageComponent;
