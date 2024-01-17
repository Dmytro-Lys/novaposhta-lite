import {  lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsRefreshing } from '../redux/auth/selectors';

// const HomePage = lazy(() => import('../pages/Home'));
const IncomingsPage = lazy(() => import('../pages/Incomings'));
const OutgoingsPage = lazy(() => import('../pages/Outgoings'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const  isRefreshing  = useSelector(selectIsRefreshing);
  
  // useEffect(() => {
      
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return  (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<IncomingsPage />} />
          {/* <Route path="/incoming" element={<IncomingsPage />} /> */}
          <Route path="/outgoing" element={<OutgoingsPage />}/>
        </Route>
    </Routes>
  );
};


export default App