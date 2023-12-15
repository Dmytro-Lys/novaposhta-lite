import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import { Logout } from '@mui/icons-material';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.email}</p>
      <Button variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}>
        <Logout/>
      </Button>
    </div>
  );
};