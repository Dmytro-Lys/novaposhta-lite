import { getReceivers, getSelectReceiver } from "redux/receivers/selectors"
import { useSelector, useDispatch } from "react-redux";
import { setReceiver, delReceiver } from "redux/receivers/receiversSlice";
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/AddCircle';
import {  MenuItem } from '@mui/material';

import Select from '@mui/material/Select';
import ReceiverModal from "components/ReceiverModal/ReceiverModal";

const ReceiversList = () => {
    const dispatch = useDispatch();
    const receiversList = useSelector(getReceivers)
    const selectValue = useSelector(getSelectReceiver)
    
    const handleChange = e => {
        dispatch(setReceiver(e.target.value))
    }
    const addClick = () => dispatch(setOpenReceiverModal(true))
    const delClick = (id) => {
        dispatch(delReceiver(id))
    }
    return (
        <>
        <Box sx={{ minWidth: 120 }}>
                <IconButton onClick={addClick} aria-label="add" color="success">
                    <AddIcon/>
               </IconButton>
               <Select
                    id="receivers"
                    value={selectValue}
                    onChange={handleChange}
                >
                        { receiversList && receiversList.length > 0 && receiversList.map(receiver => {
                            return <MenuItem key={receiver.id} value={receiver.id} >
                                       
                                {receiver.receiverName}
                                        <IconButton onClick={() => delClick(receiver.id)}
                                            aria-label="delete">
                                            <DeleteIcon />
                                </IconButton>
                            </MenuItem>
   
                    })}
                </Select>
            
        </Box>
            <ReceiverModal />
        </>    
    )
}

export default ReceiversList