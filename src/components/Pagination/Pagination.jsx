import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { getLimit, getPage } from 'redux/query/selectors';
import { useSelector, useDispatch } from "react-redux";
import { setLimit, setPage } from 'redux/query/querySlice';


const Pagination = () => {
    const dispatch = useDispatch();
    const limit = useSelector(getLimit)
    const page = useSelector(getPage)
    const handleChangePage = (event, newPage) => {
        dispatch(setPage(newPage))
    }
    const handleChangeRowsPerPage = (event) => {
      dispatch(setLimit(parseInt(event.target.value, 5)))  
      dispatch(setPage(1))     
    };
    
    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            onRowsPerPageChange={handleChangeRowsPerPage}
    />
    )
}

export default Pagination