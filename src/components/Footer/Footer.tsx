import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Chakravarthi</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to={"/services"}>
                <span className="footer__link">Services</span>
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"}>
                <span className="footer__link">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <span className="footer__link">Contact</span>
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/chakravarthichowdary/"
              target={"_blank"}
              className="footer__social"
              role="noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/ChakravarthiChowdary"
              className="footer__social"
              target={"_blank"}
              role="noreferrer"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Chakravarthi. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
