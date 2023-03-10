import { Contact } from "../types/types";

interface IContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<IContactItemProps> = ({ contact }) => {
  return (
    <div className="contact__information">
      <i className={`uil ${contact.icon} contact__icon`}></i>
      <div>
        <h3 className="contact__title">{contact.source}</h3>
        <span className="contact__subtitle">{contact.value}</span>
      </div>
    </div>
  );
};

export default ContactItem;
