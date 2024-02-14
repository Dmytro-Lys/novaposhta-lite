import { useDispatch } from 'react-redux';
import { delReceiver, setReceiver, setIsVisibleReceivers } from 'redux/receivers/receiversSlice';
import { setFilter } from 'redux/receivers/filterSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import css from './ReceiverItem.module.css'


const ReceiverItem = ({ receiver, id }) => {
    const dispatch = useDispatch();  

    const handleSelect = (id, receiver) => {
        dispatch(setReceiver(id))
        dispatch(setIsVisibleReceivers(false))
        dispatch(setFilter(receiver))
    }

    const delClick = (id) => {
        alert(id)
        // dispatch(delReceiver(id))
    }

    const editClick = (id) => {
        alert(id)
    }
    return (
        <li className={css.receiver}  >
            <p className={css.text} onClick={() => handleSelect(id, receiver)}>{receiver}</p>
            <IconButton onClick={() => editClick(id)} aria-label="delete">
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => delClick(id)} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </li>
    )
}

export default ReceiverItem