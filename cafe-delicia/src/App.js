import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
        {/* <NavBar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      */}
    </div>
  );
}

export default App;
