import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ukUA } from '@mui/material/locale';

import { getLimit, getPage } from 'redux/query/selectors';
import { useSelector, useDispatch } from "react-redux";
import { setLimit, setPage } from 'redux/query/querySlice';
import { getDocumentsCount } from 'redux/documents/selectors';




const Pagination = () => {
    const dispatch = useDispatch();
    const limit = useSelector(getLimit)
    const page = useSelector(getPage)
    const count = useSelector(getDocumentsCount)
    const handleChangePage = (event,  newPage) => {
        dispatch(setPage(newPage + 1))
    }
    const handleChangeRowsPerPage = (event) => {
      dispatch(setLimit(parseInt(event.target.value, 10)))  
      dispatch(setPage(1))     
    };

    const theme = createTheme(
      ukUA
    );
    // const defaultLabelDisplayedRows = ({ from, to, count }) =>
    // { return `${from}–${to} з ${count !== -1 ? count : `більше ніж ${to}`}`; }

    return (
      <ThemeProvider theme={theme}>
        <TablePagination
            component="div"
            count={count}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            // labelRowsPerPage='Елементів на сторінці'
            // labelDisplayedRows={defaultLabelDisplayedRows}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
     </ThemeProvider>  
    )
}

export default Pagination