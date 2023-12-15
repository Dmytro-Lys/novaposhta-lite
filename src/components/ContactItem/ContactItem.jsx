import { ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const onDel = () => dispatch(deleteContact(id))
    return (
        <ListItem
            key={id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={onDel}>
                    <DeleteIcon />
                </IconButton>}
        >
            <ListItemText primary={`${name}: ${number}`} />
        </ListItem>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}