import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/selectors.js";
import ErrorMessage from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.appBox}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {contacts.length === 0 ? "Create a contact" : <ContactList />}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
      </div>
    </>
  );
}

export default App;
