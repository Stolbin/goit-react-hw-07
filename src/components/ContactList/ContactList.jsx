import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const filterContact = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactListBox}>
      {" "}
      <ul className={css.contactList}>
        {filterContact.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
