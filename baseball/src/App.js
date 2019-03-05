import React, { Component } from 'react';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Display from './components/display/Display';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
  };

  recordStrike = e => {
    e.preventDefault();
    let strike = this.state.strikes;

    strike++;

    this.setState({ strikes: strike });
  }

  recordBall = e => {
    e.preventDefault();

    let ball = this.state.balls;

    ball++;

    this.setState({ balls: ball });
  }

  recordFoul = e => {
    e.preventDefault();
    let strike = this.state.strikes;

    if(this.setState.strikes === 2){
      return null;  
    } else if(this.state.strikes === 1){
      strike += 2;
      this.setState({ strikes: strike });
    } else {
      strike++;
      this.setState({ strikes: strike });
    }
  }

  recordHit = e => {
    e.preventDefault();

    this.setState({ strikes: 0, balls: 0 });
  }

  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard recordStrike={this.recordStrike} recordBall={this.recordBall} recordFoul={this.recordFoul} recordHit={this.recordHit}/>
      </div>
    );
  }
}

export default App;
