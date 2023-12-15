import { List } from '@mui/material';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    return (
    <>
        {visibleContacts && 
        <List >
            {visibleContacts.map(({id, name, number }) => {
                return <ContactItem key={id} id={id} name={name} number={number} />
            })}
        </List >
            }
    </>
    )
    
}


