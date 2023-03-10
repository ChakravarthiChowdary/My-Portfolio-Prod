import "./About.css";

function getExperience(startDate = "2018-09-06") {
  const start = new Date(startDate);
  const today = new Date();

  const yearsDiff = today.getFullYear() - start.getFullYear();
  const monthsDiff = today.getMonth() - start.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const monthStr = months > 0 ? months + "+" : "";

  return `${years}.${monthStr}`;
}
const About = () => {
  return (
    <section className="about section" id="About">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src="assets/img/about.jpg" alt="my about" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            A passionate web developer with 4+ years of experience in building
            front end with React Js. Developed end-points to integrate with
            front end using Node Js and Express. Have some hands on experience
            in Angular Js as well. Very enthusiastic to become full stack
            developer.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">{getExperience()}</span>
              <span className="about__info-name">
                Years <br></br> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">3+</span>
              <span className="about__info-name">
                Completed <br></br> projects
              </span>
            </div>
            <div>
              <span className="about__info-title">3</span>
              <span className="about__info-name">
                Companies <br></br> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              href="assets/pdf/Chakravarthi_Resume.pdf"
              className="button button--flex"
              download={""}
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
