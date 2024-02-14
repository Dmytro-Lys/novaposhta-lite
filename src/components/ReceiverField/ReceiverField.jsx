import { useRef, useEffect } from "react";
import { selectFilter, getSelectReceiverName } from "redux/receivers/selectors";
import { setFilter} from "redux/receivers/filterSlice";
import { setIsVisibleReceivers } from "redux/receivers/receiversSlice";
import { useSelector, useDispatch } from "react-redux";
import css from './ReceiverField.module.css'

const ReceiverField = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)

    const selectReceiver = useSelector(getSelectReceiverName)
    const firstRender = useRef(true)
    const handleChange = e => {
        dispatch(setFilter(e.target.value))
    }

    const handleFocus = () => {
        dispatch(setFilter(''))
        dispatch(setIsVisibleReceivers(true))
    } 
    
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            dispatch(setFilter(selectReceiver))
            return
        }
    }, [dispatch, selectReceiver])
    
    // const handleBlur = () => {
    //     dispatch(setFilter(selectReceiver))
    // }

    return (
        <input
            className={css.field}
            type="text"
            name="receiverName"
            value={filter}
            onChange={handleChange}
            onFocus={handleFocus}
            // onBlur={handleBlur}
            
        />
    )
}

export default ReceiverField