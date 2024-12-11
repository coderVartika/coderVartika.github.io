import React from 'react';
import App from './App';
import GreenNav from './GreenNav';
import Handcrafted from './Handcrafted';
import Barista from './Barista';
import Introduction from './Introduction';
import Coffee from './Coffee';
import Footer from './Footer';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const Component = () => {
  return (
    <>
      <BrowserRouter>
          
          <App />
          <GreenNav />
          <Introduction />
          <Handcrafted />
          <Barista />
          <Coffee />
          <Footer />
  
      </BrowserRouter>
    </>
  );
};

export default Component;