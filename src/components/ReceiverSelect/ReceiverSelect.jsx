import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import { resetForm } from "redux/receiverForm/receiverFormSlice";
import { setIsVisibleReceivers } from 'redux/receivers/receiversSlice'
import { setFilter} from "redux/receivers/filterSlice";
import { getIsVisibleReceivers, getSelectReceiverName } from 'redux/receivers/selectors'
import { getOpenReceiverModal } from 'redux/modals/selectors'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddCircle';
import ReceiverField from "components/ReceiverField/ReceiverField";
import ReceiverList from "components/ReceiverList/ReceiverList";
import ReceiverModal from "components/ReceiverModal/ReceiverModal";
import css from './ReceiverSelect.module.css'

const ReceiverSelect = () => {
    const dispatch = useDispatch();
    const isOpenReceiverModal = useSelector(getOpenReceiverModal)
    const isVisibleReceivers = useSelector(getIsVisibleReceivers)
    const selectReceiver = useSelector(getSelectReceiverName)
    
    const addClick = () => {
        dispatch(resetForm())
        dispatch(setOpenReceiverModal(true))
    }

    const handleClick = e => e.stopPropagation()

    useEffect(() => {
        const closeList = () => {
            if (isVisibleReceivers && !isOpenReceiverModal) {
                dispatch(setFilter(selectReceiver))
                dispatch(setIsVisibleReceivers(false))
            }
        }
        const handleKeyDown = e => {
            if (e.key === "Escape") closeList()
        }
        

        if (isVisibleReceivers) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('click', closeList);
        }
        
        return () => {
           document.removeEventListener('keydown', handleKeyDown);  
           document.removeEventListener('click', closeList);
        };
    }, [isVisibleReceivers,  isOpenReceiverModal, dispatch, selectReceiver])
    

    return (
        <>
            <div className={css.select} onClick={handleClick}> 
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