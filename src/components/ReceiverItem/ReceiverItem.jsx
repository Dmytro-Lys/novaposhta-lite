import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { setReceiver, setIsVisibleReceivers } from 'redux/receivers/receiversSlice';
// import { getReceivers, getSelectReceiver } from 'redux/receivers/selectors';
import {  setReceiverAll } from 'redux/receiverForm/receiverFormSlice';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { setFilter } from 'redux/receivers/filterSlice';
import { setItemId, setOpenReceiverDialog } from 'redux/dialogs/dialogsSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import css from './ReceiverItem.module.css'



const ReceiverItem = ({ receiver }) => {
    const dispatch = useDispatch();  
    const {id, receiverName} = receiver
       
    const closeReceiverList = () =>  dispatch(setIsVisibleReceivers(false))

    const handleSelect = () => {
        dispatch(setReceiver(id))
        closeReceiverList()
        dispatch(setFilter(receiverName))
    }

    const delClick = e => {
        e.stopPropagation()
        dispatch(setItemId(id))
        dispatch(setOpenReceiverDialog(true))
    }


    const editClick = e => {
        e.stopPropagation()
        dispatch(setReceiverAll(receiver))
        dispatch(setOpenReceiverModal(true))
    }

    return (
        <li className={css.receiver}  onClick={handleSelect}>
            <p className={css.text} >{receiverName}</p>
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

ReceiverItem.propTypes = {
    receiver: PropTypes.object.isRequired
}