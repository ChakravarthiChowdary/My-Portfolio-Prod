import { useState } from "react";
import { Service } from "../types/types";
import { generateId } from "../utils/GenerateRandomId";

interface IServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<IServiceContentProps> = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewModalClick = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="services__content">
      <div>
        <i className={`uil ${service.icon} services__icon`}></i>
        <h3 className="services__title">
          {service.title.split(" ")[0]} <br></br>
          {service.title.split(" ")[1]}
        </h3>
      </div>
      <span
        className="button button--flex button--small button--link services__button"
        onClick={handleViewModalClick}
      >
        View More <i className="uil uil-arrow-right button__icon"></i>
      </span>
      {showModal && (
        <div className="services__modal">
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              {service.title.split(" ")[0]} <br></br>
              {service.title.split(" ")[1]}
            </h4>
            <i
              className="uil uil-times services__modal-close"
              onClick={handleViewModalClick}
            ></i>

            <ul className="services__modal-services grid">
              {service.serviceDescription.map((description) => (
                <li
                  className="services__modal-service"
                  key={description + generateId(5)}
                >
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceContent;
