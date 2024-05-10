import { useSelector, useDispatch } from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { setOpenReceiverDialog, setItemId } from "redux/dialogs/dialogsSlice";
import { getOpenReceiverDialog, getItemId } from "redux/dialogs/selectors";
import { delReceiver, setReceiver } from 'redux/receivers/receiversSlice';
import { getReceivers, getSelectReceiver } from 'redux/receivers/selectors';
import StyledButton from "components/StyledButton/StyledButton";

const ReceiverDialog = () => {
    const dispatch = useDispatch();
    const openReceiverDialog = useSelector(getOpenReceiverDialog)
    const receivers = useSelector(getReceivers)
    const selectId = useSelector(getSelectReceiver)
    const currentId = useSelector(getItemId)

    const handleClose = e => {
        e.stopPropagation() 
       dispatch(setItemId('')) 
       dispatch(setOpenReceiverDialog(false))
    }

    const changeSelectItem = (receivers, id) => {
        if (receivers.length === 1) return ''
        const index = receivers.findIndex(receiver => receiver.id === id)
        if (index === 0) return receivers[1].id
        return receivers[index - 1].id
    }

    const handleDelete = e => {
        if (currentId === selectId) dispatch(setReceiver(changeSelectItem(receivers, currentId)))
        dispatch(delReceiver(currentId))
        handleClose(e)
    }

    return (
        <Dialog
            open={openReceiverDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Видалення запису
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-description"
                    sx={{
                        color: (theme) => theme.palette.grey[900],
                    }}
                >
                    Ви дійсно бажаєте вилучити інформацію
                    про даного отримувача?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <StyledButton
                    variant="contained"
                    sx={{
                        mr: 1, mb: 2,
                        color: "#303f9f",
                        backgroundColor: '#bbdefb',
                        '&:hover': {
                            backgroundColor: '#90caf9',
                        },
                    }}
                    onClick={handleClose}
                >
                    Закінчити
                </StyledButton>
                <StyledButton
                    variant="contained"
                   sx={{ mr: 2, mb: 2}}
                    onClick={handleDelete}
                    color='error'
                >
                    Видалити
                </StyledButton>
            </DialogActions>
        </Dialog>
    )
}

export default ReceiverDialog