import React, { Component } from 'react';
import './App.css';
import Cam from './Components/Camera'
import NavBar from './Components/navagationSistem/NavBar'
import FeedList from './Components/feedComponent/FeedList'
import RecordingAPI from './Components/recordSystem'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <FeedList></FeedList>
        <Cam></Cam>
        <RecordingAPI></RecordingAPI>
      </div>
    );
  }
}

export default App;
