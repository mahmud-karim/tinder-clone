import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
