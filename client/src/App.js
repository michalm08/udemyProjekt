import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';
// import { Landing } from './components/layout/Landing';


const App = () => (
  <Fragment>
    <Navbar/>
    <Landing/>
    <Landing/>
  </Fragment>
);

export default App;
