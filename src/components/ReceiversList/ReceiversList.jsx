import { getReceivers, getSelectReceiver } from "redux/receivers/selectors"
import { useSelector, useDispatch } from "react-redux";
import { setReceiver } from "redux/receivers/receiversSlice";
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

const ReceiversList = () => {
    const dispatch = useDispatch();
    const receiversList = useSelector(getReceivers)
    const selectValue = useSelector(getSelectReceiver)
    const handleChange = e => {
        dispatch(setReceiver(e.target.value))
    }
    return (
         receiversList && receiversList.length > 0 &&
        <Box sx={{ minWidth: 120 }}>
               <Select
                    id="receivers"
                    value={selectValue}
                    onChange={handleChange}
                >
                        {receiversList.map(receiver => {
                            return <MenuItem key={receiver.id} value={receiver.id}>{receiver.receiverName}</MenuItem>
                    })}
                </Select>
        </Box>
    )
}

export default ReceiversList