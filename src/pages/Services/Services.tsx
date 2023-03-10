import "./Services.css";
import ServiceContent from "../../components/ServiceContent";
import { services } from "../../data/constants";

const Services = () => {
  return (
    <section className="services section" id="Services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {services.map((service) => (
          <ServiceContent service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
