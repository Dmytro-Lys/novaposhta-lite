import { useDispatch, useSelector } from 'react-redux';
import { delReceiver, setReceiver, setIsVisibleReceivers } from 'redux/receivers/receiversSlice';
import { setReceiverId, setReceiverName, setReceiverApiKey } from 'redux/receiverForm/receiverFormSlice';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { setFilter } from 'redux/receivers/filterSlice';
import { getReceivers } from 'redux/receivers/selectors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import css from './ReceiverItem.module.css'



const ReceiverItem = ({ receiver, id }) => {
    const dispatch = useDispatch();  
    const receivers = useSelector(getReceivers);

    const findReceiverById = id => receivers.find(receiver => receiver.id === id)

    const handleSelect = (id, receiver) => {
        dispatch(setReceiver(id))
        dispatch(setIsVisibleReceivers(false))
        dispatch(setFilter(receiver))
    }

    const delClick = (id) => {
        
        dispatch(delReceiver(id))
    }


    const editClick = (id) => {
        dispatch(setReceiverId(id))
        const { receiverName, apiKey } = findReceiverById(id)
        dispatch(setReceiverName(receiverName))
        dispatch(setReceiverApiKey(apiKey))
        dispatch(setOpenReceiverModal(true))
    }

    return (
        <li className={css.receiver}  >
            <p className={css.text} onClick={() => handleSelect(id, receiver)}>{receiver}</p>
            <IconButton onClick={() => editClick(id)} aria-label="edit">
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => delClick(id)} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </li>
    )
}

export default ReceiverItem