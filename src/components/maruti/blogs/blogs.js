import React from "react";
import ReusableBlogComponent from "./reusable-blogs";
import ReusableImageBlogComponent from "./reusable-image-blog";
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
      image: [
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/11/1e80515e-npd-min.jpg",
          title: "8-Step Guide To New Product Development Process (NPD)",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/10/740ec031-remote-teams-min.jpg",
          title:
            "How To Reinvent the Scrum Process for Modern Distributed Teams",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/10/14fa7d0e-scrumframework-min.jpg",
          title:
            "The Ultimate Guide to Scaled Agile Frameworks: SAFe, LeSS, DA, Scrum@Scale",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/10/dcf7a600-airbnb-min.jpg",
          title: "Build Your Own App Like Airbnb - A Detailed Guide",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/10/d315fc9a-sentimentanalysis-min.jpg",
          title:
            "Introduction to Sentiment Analysis: Concept, Working, and Application",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/09/7d990f61-microservices-archietecture.jpg",
          title: "How To Configure API Gateway in Microservices Architecture",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/09/02ea9861-testing.jpg",
          title: "Regression Testing - Strategies, Tools, and Frameworks",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/08/9aeb6d8f-neuralnetwork-min.jpg",
          title:
            "Modernizing Computer Vision With Neural Networks - Applications & Analysis",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/06/db40fe7c-wkb1xiki9m.jpg",
          title: "How Identity Server Enables Easy User Management",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/06/6a39e5c0-y3rvuapcpz.jpg",
          title: "How to Empower Your Citizen Developers [13-Step Guide]",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/03/df492841-xbo410dlad-min.jpg",
          title: "Top 16 Rapid Application Development Tools in 2021",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2021/01/cde2406f-blue-and-white-abstract-technology-blog-banner-5-min.png",
          title: "Mendix Vs. Appian - Is there a Clear Winner?",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/12/bc96434d-mendixbanner.png",
          title: "Mendix Vs. OutSystems - Make an Informed Decision",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/11/52fd65a9-f2xh30cv3c.jpg",
          title:
            "What is a Citizen Developer? How Can You Harness the Power of Citizen Development?",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/11/b811eccb-f5vh2rflxa-min.jpg",
          title:
            "Top 15 Low Code Platforms 2021– Selecting the Best Low Code Platform",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/10/5f6d8dbe-un4dffwdat.jpg",
          title: "Your Complete Guide To Rapid Application Development (RAD)",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/10/d03649cc-s1zqqsifq5.jpg",
          title: "Traditional Testing Vs. Agile Testing - Which Way To Go?",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/10/ffa7ddc4-lxzb3kgtvj.jpg",
          title:
            "A Comprehensive Guide To Choosing The Best Software Testing Partner",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/09/aa139ccf-qagvby0imz.jpg",
          title: "11 Reasons Why You Too Need To Outsource Mobile App Testing",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/09/31a2f764-qaincicd.jpg",
          title: "Implementing QA in a CI/CD Pipeline - Best Practices & Tips",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/08/ee0840ef-emvabra70k-min.jpg",
          title: "SDET vs QA - Addressing The Latest Debate",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/08/5e249cf5-apitesting.jpg",
          title:
            "Quick Guide To Understanding API Testing In Product Development",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/08/67b92f7c-roleofqa-min.jpg",
          title:
            "QA‌ ‌in‌ ‌Product‌ ‌Development‌ ‌-‌ ‌Here’s‌ ‌What‌ ‌You‌ ‌Need To‌ ‌Know‌",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/07/1628bcdf-uber.jpg",
          title: "How To Build An App Like Uber - Step-by-Step Guide",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/07/cdd0b969-softwaretesting.jpg",
          title: "6 Ideas for Continuous Improvement in Software Testing",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/07/a3266d21-websitetesting.jpg",
          title:
            "Your Guide to E-Commerce Website Testing - Checklist &amp; Test  Cases",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/07/182a886b-mvp-minimalviableproduct.jpg",
          title: "Build your MVP without code",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/07/e952c82e-cover-image-of-lcnc-vs-traditional-development.jpg",
          title:
            "No Code/Low Code Vs. Traditional Development - Which Team Should You Pick?",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/06/673d675d-lcnc-cover.jpg",
          title: "What is Low-Code Development? Should Your Business Care?",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/06/8e622e8d-hire-dedicated-team-cover.jpg",
          title:
            "9 Key Benefits Of Hiring a Dedicated Development Team - How To Make It Work",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/06/01685857-cover-image-of-rpa-in-accounts.jpg",
          title:
            "Streamlining Accounts Payable With RPA - Top Use Cases & Benefits",
        },
        {
          url: "https://cdn-gcp.marutitech.com/wp-media/2020/06/e4fd8326-hire-php-cover.jpg",
          title: "Hire Dedicated PHP Developers: Everything You Need To Know",
        },
      ],
    };
  }

  render() {
    return (
      <div className="blogs_wrapper">
        <div className="packed-blogs">
          {this.state.titles.length > 0 &&
            this.state.titles.map((item, i) => {
              console.log(item);
              return <ReusableBlogComponent key={i} title={item} />;
            })}
        </div>
        <div className="image-blogs">
          {this.state.image.length > 0 &&
            this.state.image.map((item, i) => {
              return <ReusableImageBlogComponent key={i} img={item} />;
            })}
        </div>
      </div>
    );
  }
}
export default BlogComponent;
