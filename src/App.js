import React, { Component } from 'react';
import './App.css';
import Cam from './Components/Camera'
import NavBar from './Components/navagationSistem/NavBar'
import FeedList from './Components/feedComponent/FeedList'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <FeedList></FeedList>
        <Cam></Cam>
      </div>
    );
  }
}

export default App;
