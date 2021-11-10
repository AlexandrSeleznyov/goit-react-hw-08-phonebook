import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactsList/ContactsList";

import { fetchContacts } from "../../redux/operations";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import s from "./ContactsView.module.css";

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Box className={s.container}>
      <Typography variant="h3" className={s.title}>
        PHONEBOOK
      </Typography>
      <ContactForm />

      <Typography variant="h3" className={s.title}>
        CONTACTS
      </Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}
