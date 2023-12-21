
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addReceiver } from 'redux/receivers/receiversSlice';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { getReceivers } from 'redux/receivers/selectors';

import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { nanoid } from 'nanoid';
import {Button, TextField, Box} from '@mui/material'

export const ReceiverForm = () => {
  const [receiverName, setReceiverName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const receivers = useSelector(getReceivers);
  const dispatch = useDispatch();

  const setState = {
    receiverName: setReceiverName,
    apiKey: setApiKey
  }
  
  const handleChange = e => {
        const { name, value } = e.target;
        setState[name](value);
  }

  const reset= ()=> {
    setReceiverName("")
    setApiKey("")
  }
  
  const findReceiver = name => receivers.find(receiver => receiver.receiverName.toLowerCase() === receiverName.toLowerCase())

  const handleClose = () => dispatch(setOpenReceiverModal(false));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!receiverName || !apiKey) return Notiflix.Notify.failure(`Fill in all fields`);
    if (findReceiver(receiverName)) return Notiflix.Notify.failure(`${receiverName} is already in receivers`);
    dispatch(
      addReceiver({
      id: nanoid(),  
      receiverName,
      apiKey
    }));
    reset()
    handleClose()
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
              id="receiverName"
              label="Отримувач"
              name="receiverName"
              pattern="^\S+$"
              value={receiverName}
              autoComplete="receiverName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="apiKey"
              pattern="^\S+$"
              value={apiKey}
              label="API Key"
              type="tel"
              id="apiKey"
              autoComplete="apiKey"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Додати отримувача
            </Button>
          </Box>
        </Box>
        )
}
