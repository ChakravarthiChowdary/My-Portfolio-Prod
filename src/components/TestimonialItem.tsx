import React from "react";
import { Testimonial } from "../types/types";

interface ITestimonialItemProps {
  testimonial: Testimonial;
}

const TestimonialItem: React.FC<ITestimonialItemProps> = ({ testimonial }) => {
  const renderRatings = () => {
    let ratings = [];

    for (let i = 0; i <= testimonial.rating - 1; i++) {
      ratings.push(
        <i className="uil uil-star testimonial__icon-star" key={i}></i>
      );
    }

    return ratings;
  };

  return (
    <div className="testimonial__content">
      <div className="testimonial__data">
        <div className="testimonial__header">
          {/* <img
            src={testimonial.urlToImage}
            alt={`${testimonial.name} personal image`}
            className="testimonial__img"
          /> */}

          <div>
            <h3 className="testimonial__name">{testimonial.name}</h3>
            <span className="testimonial__client">
              {testimonial.designation}
            </span>
          </div>
        </div>
        <div>{renderRatings()}</div>
      </div>
      <p className="testimonial__description">{testimonial.description}</p>
    </div>
  );
};

export default TestimonialItem;
