import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import css from "./Contacts.module.css"
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList"
import { Filter } from '../components/Filter/Filter'
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";

const defaultTheme = createTheme();

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
       <CssBaseline /> 
        <h2 className={css.title}>Add contact</h2>
        <Container component="section" maxWidth="xs">
          <ContactForm />
        </Container>
        <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ErrorMessage/>
      <Loader />
      <ContactList />
      </Container>  
    </ThemeProvider>
    )

}

export default Contacts