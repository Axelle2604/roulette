import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
