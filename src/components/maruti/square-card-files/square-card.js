import React from "react";
import ReusableSquareCardComponent from "./reusable-square-card";
import "./reusable-square-card.scss";

class SquareCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_e_cards: [
        {
          s_no: "1",
          id: "square-card-1",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-1.svg",
          url_path_hover:
            "https://cdn-gcp.marutitech.com/wp-media/2019/05/card-1-Copy.svg",
          title: "Cloud Application",
          knowmore_text: true,
          know_more_red_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
          know_more_red_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-arrow.svg",
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          s_no: "2",
          id: "square-card-2",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-2.svg",
          url_path_hover:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-2-Copy.svg",
          title: "DevOps",
          knowmore_text: true,
          know_more_red_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
          know_more_red_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-arrow.svg",
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          s_no: "3",
          id: "square-card-3",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-media/2019/05/card-3.svg",
          url_path_hover:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-3-Copy.svg",
          title: "Quality Engineering",
          knowmore_text: true,
          know_more_red_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
          know_more_red_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-arrow.svg",
          know_more_white_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-text.svg",
          know_more_white_arrow_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-white-arrow.svg",
        },
        {
          s_no: "4",
          id: "square-card-4",
          url_path:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-4.svg",
          url_path_hover:
            "https://cdn-gcp.marutitech.com/wp-content/uploads/2019/05/card-4-Copy.svg",
          title: "Rapid Prototyping",
          knowmore_text: true,
          know_more_red_text_svg:
            "https://marutitech.com/wp-content/uploads/2019/05/know-more-red-text.svg",
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
      <React.Fragment>
        <div className="sq-packed-div">
          {this.state.product_e_cards.length > 0 &&
            this.state.product_e_cards.map((item, i) => {
              return (
                <ReusableSquareCardComponent
                  key={i}
                  object={item}
                  className={item.id}
                />
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default SquareCardComponent;
