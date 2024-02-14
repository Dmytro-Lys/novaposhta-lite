// import { getReceivers, getSelectReceiver } from "redux/receivers/selectors"
import { useDispatch } from "react-redux"; 
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { resetForm } from "redux/receiverForm/receiverFormSlice";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddCircle';
import ReceiverField from "components/ReceiverField/ReceiverField";
import ReceiverList from "components/ReceiverList/ReceiverList";
import ReceiverModal from "components/ReceiverModal/ReceiverModal";
import css from './ReceiverSelect.module.css'

const ReceiverSelect = () => {
    const dispatch = useDispatch();

    const addClick = () => {
        dispatch(resetForm())
        dispatch(setOpenReceiverModal(true))
    }

    return (
        <>
            <div className={css.select}>
                <IconButton onClick={addClick} aria-label="add" color="success">
                    <AddIcon/>
                </IconButton>
                <ReceiverField />
                <ReceiverList/>
            </div>
            <ReceiverModal />
        </>    
    )
}

export default ReceiverSelect