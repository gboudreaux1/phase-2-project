import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';


function App() {

  

  useEffect(() => {
    fetch("http://localhost:3000/coffee")
    .then(resp => resp.json())
    .then(data => setCoffee(data))
  }, [])

  const [ coffee, setCoffee ] = useState([])
  const [ cartItems, setCartItems ] = useState([])

  const onAdd = (coffee) => {
    const exist = cartItems.find(x => x.id === coffee.id );
    if(exist) {
      setCartItems(cartItems.map(x => x.id === coffee.id ? {...exist, qty: exist.qty +1} : x 
        )
      );
    } else{
      setCartItems([...cartItems, {...coffee, qty:1}])
    }
  }

  const onRemove = (coffee) => {
    const exist = cartItems.find(x => x.id === coffee.id );
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== coffee.id));
    } else{
      setCartItems(
        cartItems.map((x) =>
          x.id === coffee.id ? { ...exist, qty: exist.qty -1 } : x
        )
      )
    }
  }

  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
          <Route path="/menu">
            <Menu 
              coffeeList = { coffee }
              cartItems = { cartItems }
              onAdd = { onAdd }
              onRemove = { onRemove }
              />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
