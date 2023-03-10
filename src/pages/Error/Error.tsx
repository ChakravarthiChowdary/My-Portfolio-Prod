import Banner from "../../components/Banner/Banner";
import "./Error.css";

const Error = () => {
  return (
    <div className="error__container">
      <Banner message="We are not able to find this page !" type="error" />
    </div>
  );
};

export default Error;
