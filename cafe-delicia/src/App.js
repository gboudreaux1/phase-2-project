import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';


function App() {

  useEffect(() => {
    fetch("http://localhost:3000/coffee")
    .then(resp => resp.json())
    .then(data => setCoffee(data))
  }, [])

  const [coffee, setCoffee] = useState([])

  return (
    <div className="App">
        <NavBar />
        <Switch>
        <Route path="/menu">
            <Menu coffeeList = { coffee }/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
