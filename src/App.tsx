// Import Swiper styles
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles/Shared.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import LandingPage from "./pages/LandingPage/LandingPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
