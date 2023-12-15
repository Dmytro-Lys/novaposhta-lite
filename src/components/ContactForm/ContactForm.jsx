
import { useState } from 'react';
import {useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import {Button, TextField, Box} from '@mui/material'

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const setState = {
    name: setName,
    number: setNumber
  }
  
  const handleChange = e => {
        const { name, value } = e.target;
        setState[name](value);
  }

  const reset= ()=> {
    setName("")
    setNumber("")
  }
  
  const findContact = name => contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !number) return Notiflix.Notify.failure(`Fill in all fields`);
    if (findContact(name)) return Notiflix.Notify.failure(`${name} is already in contacts`);
    dispatch(
      addContact({
      name,
      number
    }));
    reset()
   
   };

  
  return (
       <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onChange={handleChange} onSubmit={handleSubmit} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
              value={name}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              value={number}
              label="Number"
              type="tel"
              id="number"
              autoComplete="number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
        )
}
