import { useDispatch, useSelector } from 'react-redux';
import { delReceiver, setReceiver, setIsVisibleReceivers } from 'redux/receivers/receiversSlice';
import { getReceivers, getSelectReceiver } from 'redux/receivers/selectors';
import {  setReceiverAll } from 'redux/receiverForm/receiverFormSlice';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { setFilter } from 'redux/receivers/filterSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import css from './ReceiverItem.module.css'



const ReceiverItem = ({ receiver }) => {
    const dispatch = useDispatch();  
    const {id, receiverName} = receiver
    const receivers = useSelector(getReceivers)
    const selectId = useSelector(getSelectReceiver)

    const changeSelectItem = (receivers, id) => {
        if (receivers.length === 1) return ''
        const index = receivers.findIndex(receiver => receiver.id === id)
        if (index === 0) return receivers[1].id
        return receivers[index - 1].id
    }
    
    const closeReceiverList = () =>  dispatch(setIsVisibleReceivers(false))

    const handleSelect = () => {
        dispatch(setReceiver(id))
        closeReceiverList()
        dispatch(setFilter(receiverName))
    }

    const delClick = () => {
        if (id === selectId) dispatch(setReceiver(changeSelectItem(receivers, id)))
        dispatch(delReceiver(id))
        
    }


    const editClick = () => {
        dispatch(setReceiverAll(receiver))
        dispatch(setOpenReceiverModal(true))
    }

    return (
        <li className={css.receiver}  >
            <p className={css.text} onClick={handleSelect}>{receiverName}</p>
            <IconButton onClick={editClick} aria-label="edit">
                <EditIcon />
            </IconButton>
            <IconButton onClick={ delClick} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </li>
    )
}

export default ReceiverItem