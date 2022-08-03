import React, { useState } from "react";
import MenuCard from './MenuCard';
import DisplayCart from './DisplayCart';
import SearchBar from './SearchBar';

function Menu({coffeeList, onAdd, onRemove, cartItems}) {
   
    const [searchString, setSearchString] = useState ('')
 
    function byName(coffeeObject) {
        return coffeeObject.name.toLowerCase().includes( searchString.toLowerCase())
    }
  
    const filteredCoffee = coffeeList.filter( byName )
   
  
 
    const coffeeItems = filteredCoffee.map(coffee => {
        return <MenuCard 
        key = { coffee.id }
        coffee = { coffee }
        onAdd = { onAdd }
        onRemove = { onRemove }
        />
    })

    return(
        <div>
            <h1>Menu</h1>
            <SearchBar setSearchString = {setSearchString}/>
            <DisplayCart onAdd = { onAdd } onRemove = { onRemove } cartItems = { cartItems } />
            {coffeeItems}
        </div>
    )
}

export default Menu;