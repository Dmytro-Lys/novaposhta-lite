import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {FilterAlt, FilterAltOff} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';


export const Filter = () => {
    const filter = useSelector(selectFilter) || "";
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(setFilter(e.target.value))
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography color="#1976d2" component="h1" variant="h6" sx={{ mb: 1 }} >
            Find contact by name
          </Typography>
      <TextField
        
        id="filter"
        label="Filter"
        variant="outlined"
        value={filter}
        onChange={handleChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">
            {filter.length !== 0 && <FilterAlt sx={{ color: '#1976d2' }} />}
            {filter.length === 0 && <FilterAltOff />}
            </InputAdornment>,
          }}
      />
      </Box>
    )
}

