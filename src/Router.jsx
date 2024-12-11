import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Gift from './Gift';
import Order from './Order';
import Pay from './Pay';
import Store from './Store';

const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="gift" element={<Gift />} />
          <Route path="order" element={<Order />} />
          <Route path="pay" element={<Pay />} />
          <Route path="store" element={<Store />} />
      </Routes>
    </>
  );
};

export default Router;
