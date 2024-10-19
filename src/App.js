import React from 'react';

import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
