import React from 'react'
import MenuCard from './MenuCard';
import DisplayCart from './DisplayCart';

function Menu({coffeeList, cartItems, onAdd}) {
    console.log(cartItems)

    const coffeeItems = coffeeList.map(coffee => {
        return <MenuCard 
        key = { coffee.id }
        coffee = { coffee }
        onAdd = { onAdd }
        />
    })

    return(
        <div>
            <h1>Menu</h1>
            <DisplayCart onAdd = { onAdd } cartItems = { cartItems } />
            {coffeeItems}
        </div>
    )
}

export default Menu;