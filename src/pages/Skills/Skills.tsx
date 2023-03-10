import "./Skills.css";
import { useState } from "react";
import { skills } from "../../data/constants";

const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleArrowClickedHandler = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section className="skills section" id="Skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Mt technical level</span>

      <div className="skills__container container grid">
        {skills.map((skill, index) => (
          <div
            className={`skills__content ${
              selectedIndex === index ? "skills__open" : "skills__close"
            }`}
            onClick={() => handleArrowClickedHandler(index)}
            key={skill.id}
          >
            <div className="skills__header">
              <i className={`uil ${skill.skillsIcon} skills__icon`}></i>
              <div>
                <h1 className="skills__title">{skill.skillTitle}</h1>
                <span className="skills__subtitle">{skill.skillsSubtitle}</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              {skill.skills.map((technology) => (
                <div className="skills__data" key={technology.id}>
                  <div className="skills__titles">
                    <h3 className="skills__name">{technology.name}</h3>
                    <span className="skills__number">
                      {technology.percentage}
                    </span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: technology.percentage }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
