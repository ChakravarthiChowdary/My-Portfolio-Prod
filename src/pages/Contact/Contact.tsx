import "./Contact.css";
import ContactItem from "../../components/ContactItem";
import { contacts } from "../../data/constants";
import React, { useCallback, useEffect, useState } from "react";
import { validateEmail } from "../../utils/ValidateEmail";
import Banner from "../../components/Banner/Banner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: {
      valid: true,
      value: "",
    },
    email: {
      valid: true,
      value: "",
    },
    message: {
      valid: true,
      value: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServerError(false);
      setSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [success, serverError]);

  const sendMessage = async () => {
    const { name, email, message } = formData;

    try {
      setLoading(true);
      await fetch(
        "https://myportfolio-af284-default-rtdb.firebaseio.com/messages.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
            receivedDate: new Date(),
            responded: false,
          }),
        }
      );

      setLoading(false);
      setSuccess(true);
      setFormData({
        name: {
          valid: true,
          value: "",
        },
        email: {
          valid: true,
          value: "",
        },
        message: {
          valid: true,
          value: "",
        },
      });
    } catch (error) {
      setServerError(true);
      setLoading(false);
      setFormData({
        name: {
          valid: true,
          value: "",
        },
        email: {
          valid: true,
          value: "",
        },
        message: {
          valid: true,
          value: "",
        },
      });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: {
        valid:
          event.target.id === "email"
            ? validateEmail(event.target.value)
            : event.target.value !== "",
        value: event.target.value,
      },
    }));
  };

  const handleSendMessageClick = async () => {
    const { name, email, message } = formData;
    let okToReturn = false;
    if (name.value === "") {
      setFormData((prevState) => ({
        ...prevState,
        name: {
          valid: false,
          value: "",
        },
      }));
      okToReturn = true;
    }
    if (email.value === "") {
      setFormData((prevState) => ({
        ...prevState,
        email: {
          valid: false,
          value: "",
        },
      }));
      okToReturn = true;
    }
    if (message.value === "") {
      setFormData((prevState) => ({
        ...prevState,
        message: {
          valid: false,
          value: "",
        },
      }));
      okToReturn = true;
    }

    if (okToReturn) return;

    sendMessage();
  };

  return (
    <section className="contact section" id="Contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </div>

        <div className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label
                htmlFor=""
                className={`contact__label  ${
                  !formData.name.valid && "contact__error-label"
                }`}
              >
                * Name
              </label>
              <input
                type={"text"}
                className="contact__input"
                value={formData.name.value}
                id="name"
                onChange={handleInputChange}
              />
              {!formData.name.valid && (
                <span className="contact__error-message">
                  Name is mandatory
                </span>
              )}
            </div>

            <div className="contact__content">
              <label
                htmlFor=""
                className={`contact__label  ${
                  !formData.email.valid && "contact__error-label"
                }`}
              >
                * Email
              </label>
              <input
                type={"email"}
                className="contact__input"
                value={formData.email.value}
                id="email"
                onChange={handleInputChange}
              />
              {!formData.email.valid && (
                <span className="contact__error-message">
                  Email is not valid
                </span>
              )}
            </div>
          </div>
          <div className="contact__content">
            <label
              htmlFor=""
              className={`contact__label  ${
                !formData.message.valid && "contact__error-label"
              }`}
            >
              * Message
            </label>
            <textarea
              name=""
              className="contact__input"
              id="message"
              cols={0}
              rows={10}
              value={formData.message.value}
              onChange={handleInputChange}
            ></textarea>
            {!formData.message.valid && (
              <span className="contact__error-message">
                Message is mandatory
              </span>
            )}
          </div>
          {serverError && (
            <Banner message="Not able to get you, try sending again !" />
          )}
          {success && (
            <Banner
              message="Got your message, will reply soon !"
              type="success"
            />
          )}
          <div>
            <span
              className={`button button--flex ${loading && "button--disabled"}`}
              onClick={!loading ? handleSendMessageClick : () => {}}
            >
              Send Message
              {!loading ? (
                <i className="uil uil-message button__icon"></i>
              ) : (
                <div className="loader"></div>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
