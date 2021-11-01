import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactsList/ContactsList";

import { fetchContacts } from "../../redux/operations";
import s from "./ContactsView.module.css";

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
