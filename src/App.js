import React, { Component } from 'react';
import './App.css';
import Post from './components/post';
import Tab from './components/tab';
import Slideshow from './components/slideshow';
import Disclaimer from './components/disclaimer';
import Banner from './components/banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
        <header className="App-header">
          <Tab />
        </header>
          <Post />
          {/* <Post />
          <Post /> */}
          <Disclaimer/>
        </div>
        <div className="App-slideshow">
        <Slideshow />
        </div>
        <Banner />
      </div>
    );
  }
}

export default App;
