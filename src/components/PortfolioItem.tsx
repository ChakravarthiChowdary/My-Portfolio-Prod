import { Portfolio } from "../types/types";

interface IPortfolioItemProps {
  portfolio: Portfolio;
}

const PortfolioItem: React.FC<IPortfolioItemProps> = ({ portfolio }) => {
  return (
    <div className="portfolio__content grid">
      <img src={portfolio.urlToImage} alt="" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{portfolio.titile}</h3>
        <p className="portfolio__description">{portfolio.description}</p>
        <a
          href={portfolio.demoUrl}
          className="button button--flex button--small portfolio__button"
          target={"_blank"}
          role={"noreferrer"}
        >
          Demo
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
