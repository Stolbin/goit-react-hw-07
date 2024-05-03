import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
const Contact = ({ contact }) => {
  const { name, number } = contact;
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <h4 className={css.contactTitle}>{name}</h4>
      <p className={css.contactText}>
        <span className={css.spanontactText}>☎️</span>
        {number}
      </p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
