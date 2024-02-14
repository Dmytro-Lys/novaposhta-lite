

import { useSelector, useDispatch } from "react-redux";
import { addReceiver, changeReceiver } from 'redux/receivers/receiversSlice';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { getReceivers } from 'redux/receivers/selectors';
import {  setReceiverName, setReceiverApiKey, resetForm } from 'redux/receiverForm/receiverFormSlice';
import { getReceiverId, getReceiverName, getReceiverApiKey } from 'redux/receiverForm/selectors';
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { nanoid } from 'nanoid';
import {Button, TextField, Box} from '@mui/material'

export const ReceiverForm = () => {
  const dispatch = useDispatch();
 
  const receivers = useSelector(getReceivers);

  const id = useSelector(getReceiverId)
  const receiverName = useSelector(getReceiverName)
  const apiKey = useSelector(getReceiverApiKey)

  const changeReceiverName = value => dispatch(setReceiverName(value))

  const changeReceiverApiKey = value => dispatch(setReceiverApiKey(value))

  const setState = {
    receiverName: changeReceiverName,
    apiKey: changeReceiverApiKey,
  }
 

  
  const handleChange = e => {
        const { name, value } = e.target;
        setState[name](value);
  }

  const reset = () => {
    dispatch(resetForm())
  }
  
  const findReceiver = name => receivers.find(receiver => receiver.receiverName.toLowerCase() === name.toLowerCase())

  const handleClose = () => dispatch(setOpenReceiverModal(false));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!receiverName || !apiKey) return Notiflix.Notify.failure(`Fill in all fields`);
    if (findReceiver(receiverName)) return Notiflix.Notify.failure(`${receiverName} is already in receivers`);
    if (id) {
      dispatch(changeReceiver({
        id,
        receiverName,
        apiKey
      }))
    } else {
      dispatch(
        addReceiver({
          id: nanoid(),
          receiverName,
          apiKey
        }))
    };
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
              Ok
            </Button>
          </Box>
        </Box>
        )
}
