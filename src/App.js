import React, { Component } from 'react';
import StationList from './components/stationlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BIKE DASHBOARD</h1>
        <StationList />
      </div>
    );
  }
}
export default App;
