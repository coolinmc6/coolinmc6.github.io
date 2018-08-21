import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Logo from './artwork/twitter_header_photo_1.png';

let logoStyle = {
  maxWidth: "100vw"
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img src={Logo} style={logoStyle}/>
      </div>
    );
  }
}

export default App;
