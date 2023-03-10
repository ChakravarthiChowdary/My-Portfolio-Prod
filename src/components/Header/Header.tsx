import "./Header.css";
import { useCallback, useEffect, useState } from "react";
import { NavItems } from "../../data/constants";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();

  const handleToggleClick = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

  const handleDarkModeClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  const makeActiveLink = (linkname: string) => {
    return (
      pathname === `/${linkname}` || (pathname === "/" && linkname === "home")
    );
  };

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [darkMode]);

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <Link to={"/"}>
          <span className="nav__logo">Chakravarthi</span>
        </Link>
        <div className={`nav__menu ${showMenu && "show-menu"}`} id="nav-menu">
          <ul className="nav__list grid">
            {NavItems.map((navItem) => (
              <li className="nav__item" key={navItem.id}>
                <Link
                  to={
                    navItem.title.toLowerCase() === "home"
                      ? "/"
                      : navItem.title.toLowerCase()
                  }
                >
                  <span
                    className={`nav__link ${
                      makeActiveLink(navItem.title.toLowerCase()) &&
                      "nav__link-active"
                    }`}
                    onClick={handleToggleClick}
                  >
                    <i className={`uil nav__icon ${navItem.icon}`}></i>{" "}
                    {navItem.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={handleToggleClick}
          ></i>
        </div>
        <div className="nav__btns">
          <i
            className={`uil ${darkMode ? "uil-sun" : "uil-moon"} change-theme`}
            id="theme-button"
            onClick={handleDarkModeClick}
          ></i>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleToggleClick}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
