import {  lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const IncomingsPage = lazy(() => import('../pages/Incomings'));
const OutgoingsPage = lazy(() => import('../pages/Outgoings'));

export const App = () => {
 
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