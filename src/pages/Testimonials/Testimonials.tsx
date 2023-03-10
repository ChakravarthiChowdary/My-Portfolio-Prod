import "./Testimonials.css";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialItem from "../../components/TestimonialItem";
import { testimonials } from "../../data/constants";

const Testimonials = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My Collegue / Client saying</span>
      <div className="testimonial__container">
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          draggable
          spaceBetween={50}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialItem testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
