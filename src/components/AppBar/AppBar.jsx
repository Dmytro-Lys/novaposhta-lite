import { Navigation } from '../Navigation/Navigation';
import ReceiverSelect from 'components/ReceiverSelect/ReceiverSelect';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <ReceiverSelect/>
    </header>
  );
};