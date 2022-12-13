import React from 'react';
import { HashRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';
import { StyledApp } from './index.styles';

import './App.css';

function App() {
  return (
    <StyledApp>
      <HashRouter>
        <Navbar />
        <Routes />
        <Footer />
      </HashRouter>
    </StyledApp>
  );
}

export default App;
