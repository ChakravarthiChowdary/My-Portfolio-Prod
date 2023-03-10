import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Portfolio.css";
import PortfolioItem from "../../components/PortfolioItem";
import { portfolios } from "../../data/constants";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="Portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div>
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          draggable
          spaceBetween={50}
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide key={portfolio.id}>
              <PortfolioItem portfolio={portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
