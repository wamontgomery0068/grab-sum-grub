import React, { Component } from 'react';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main_Container">

        <NavBar />
        <Header />
        <MainContent />

      </div>
    );
  }
}

export default App;
