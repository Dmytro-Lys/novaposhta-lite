import { useRef, useEffect } from "react";
import { selectFilter, getSelectReceiverName, getIsVisibleReceivers } from "redux/receivers/selectors";
import { setFilter} from "redux/receivers/filterSlice";
import { setIsVisibleReceivers } from "redux/receivers/receiversSlice";
import { useSelector, useDispatch } from "react-redux";
import css from './ReceiverField.module.css'

const ReceiverField = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)
    const isVisibleReceivers = useSelector(getIsVisibleReceivers)
    const selectReceiver = useSelector(getSelectReceiverName)
    const firstRender = useRef(true)
    const handleChange = e => {
        dispatch(setFilter(e.target.value))
    }
    
    const clearFilter = () => dispatch(setFilter(''))

    const restoreReceiver = () => dispatch(setFilter(selectReceiver))
    
    const openReceiverList = () => dispatch(setIsVisibleReceivers(true))

    const closeReceiverList = () =>dispatch(setIsVisibleReceivers(false))
    
    const handleClick = () =>{
        if (isVisibleReceivers ) {
            if (!filter) {
                restoreReceiver()
                closeReceiverList()
            }
        } else {
            clearFilter()
            openReceiverList()
        }
      
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            dispatch(setFilter(selectReceiver))
            return
        }
    }, [dispatch, selectReceiver])
     
    return (
        <input
            className={css.field}
            type="text"
            name="receiver"
            value={filter}
            onChange={handleChange}
            onClick={handleClick}
        />
    )
}

export default ReceiverField