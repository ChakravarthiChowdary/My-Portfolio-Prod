import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Qualifications from "../Qualifications/Qualifications";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <a
          href="#Home"
          className="scrollup"
          id="scroll-up"
          style={{ bottom: scrollPosition > 80 ? "5rem" : "-20%" }}
        >
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </main>
    </>
  );
}

export default LandingPage;
