import React from 'react'
import MenuCard from './MenuCard';
import DisplayCart from './DisplayCart';

function Menu({coffeeList, onAdd, onRemove, cartItems}) {
   

    const coffeeItems = coffeeList.map(coffee => {
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
            <DisplayCart onAdd = { onAdd } onRemove = { onRemove } cartItems = { cartItems } />
            {coffeeItems}
        </div>
    )
}

export default Menu;