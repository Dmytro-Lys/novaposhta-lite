import {  lazy } from 'react';
import { useDispatch } from "react-redux";
// import {  useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { setTrackingApiKey } from 'redux/tracking/trackingSlice';

const IncomingsPage = lazy(() => import('../pages/Incomings'));
const OutgoingsPage = lazy(() => import('../pages/Outgoings'));

export const App = () => {
  const dispatch = useDispatch()
  const { REACT_APP_TRACKING_API_KEY } = process.env;
  if (REACT_APP_TRACKING_API_KEY) {
    dispatch(setTrackingApiKey(REACT_APP_TRACKING_API_KEY))
  } else {
    console.log('TRACKING_API_KEY is not read (APP)')
  }
  // useEffect(() => {
  //   if (!REACT_APP_TRACKING_API_KEY) return console.log('TRACKING_API_KEY is not read (APP)')
  //   dispatch(setTrackingApiKey(REACT_APP_TRACKING_API_KEY))
  // }, [dispatch, REACT_APP_TRACKING_API_KEY])
  
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