import {  lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const IncomingsPage = lazy(() => import('../pages/Incomings'));
const OutgoingsPage = lazy(() => import('../pages/Outgoings'));

export const App = () => {
  // const dispatch = useDispatch()
  // const { REACT_APP_TRACKING_API_KEY } = process.env;
  // if (REACT_APP_TRACKING_API_KEY) {
  //   dispatch(setTrackingApiKey(REACT_APP_TRACKING_API_KEY))
  // } else {
  //   console.log('TRACKING_API_KEY is not read (APP)')
  // }
 
  return  (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<IncomingsPage />} />
          <Route path="/outgoing" element={<OutgoingsPage />}/>
        </Route>
    </Routes>
  );
};


export default App