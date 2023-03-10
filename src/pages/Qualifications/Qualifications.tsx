import "./Qualifications.css";
import { useState } from "react";
import Qualification from "../../components/Qualification";
import { qualifications } from "../../data/constants";

const Qualifications = () => {
  const [tabSelected, setTabSelected] = useState("work");

  const handleTabClick = (tab: string) => {
    setTabSelected(tab);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              tabSelected === "work" && "qualification__tab-active"
            }`}
            onClick={() => handleTabClick("work")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
          <div
            className={`qualification__button button--flex ${
              tabSelected === "education" && "qualification__tab-active"
            }`}
            onClick={() => handleTabClick("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {tabSelected === "work" && (
            <div className="qualification__content" data-content id="work">
              {qualifications
                .filter((qualification) => qualification.type === "work")
                .map((qualification, index, arr) => (
                  <Qualification
                    qualification={qualification}
                    index={index}
                    arr={arr}
                    key={qualification.id}
                  />
                ))}
            </div>
          )}
          {tabSelected === "education" && (
            <div className="qualification__content" data-content id="education">
              {qualifications
                .filter((qualification) => qualification.type === "education")
                .map((qualification, index, arr) => (
                  <Qualification
                    qualification={qualification}
                    index={index}
                    arr={arr}
                    key={qualification.id}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
