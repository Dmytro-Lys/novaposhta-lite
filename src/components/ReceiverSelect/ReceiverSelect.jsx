// import { getReceivers, getSelectReceiver } from "redux/receivers/selectors"
import { useDispatch } from "react-redux"; 
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddCircle';
import ReceiverField from "components/ReceiverField/ReceiverField";
import ReceiverList from "components/ReceiverList/ReceiverList";
import css from './ReceiverSelect.module.css'

const ReceiverSelect = () => {
    const dispatch = useDispatch();
    const addClick = () => dispatch(setOpenReceiverModal(true))
    return (
        <div className={css.select}>
            <IconButton onClick={addClick} aria-label="add" color="success">
                    <AddIcon/>
            </IconButton>
            <ReceiverField />
            <ReceiverList/>
        </div>
    )
}

export default ReceiverSelect