import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Landingpage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Default from "./components/Default";

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landingpage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Default/>} />
        </Routes>       
    </React.Fragment>
    );
  }
}

export default App;