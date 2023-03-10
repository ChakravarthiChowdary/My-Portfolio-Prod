import "./Home.css";
import BlobImage from "../../components/BlobImage";
import Introduction from "../../components/Introduction";
import { socialIcons } from "../../data/constants";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  return (
    <section className="home section" id="Home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialIcons.map((socialIcon) => (
              <a
                href={socialIcon.link}
                target="_blank"
                className="home__social-icon"
                key={socialIcon.id}
                rel="noreferrer"
              >
                <i className={`uil ${socialIcon.icon}`}></i>
              </a>
            ))}
          </div>
          <div className="home__img">
            <BlobImage />
          </div>
          <div className="home__data">
            <Introduction />
          </div>
        </div>
        {location.pathname === "/" && (
          <div className="home__scroll">
            <a className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
