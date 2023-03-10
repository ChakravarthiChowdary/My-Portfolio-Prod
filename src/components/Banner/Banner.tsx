import "./Banner.css";

interface IBannerProps {
  message: string;
  type?: "error" | "success";
}

const Banner: React.FC<IBannerProps> = ({ message, type = "error" }) => {
  const isErrorBanner = type === "error";

  return (
    <div>
      <div
        className={`banner__content ${
          isErrorBanner ? "error__content" : "success__content"
        }`}
      >
        <i
          className={`uil ${
            isErrorBanner ? "uil-exclamation-circle" : "uil-check-circle"
          } banner__icon`}
        ></i>
        <h3 className="banner__title">{message}</h3>
      </div>
    </div>
  );
};

export default Banner;
