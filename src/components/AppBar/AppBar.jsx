import { Navigation } from '../Navigation/Navigation';
// import ReceiversList from '../ReceiversList/ReceiversList';
import ReceiverSelect from 'components/ReceiverSelect/ReceiverSelect';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  // const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {/* <ReceiversList/> */}
      <ReceiverSelect/>
    </header>
  );
};