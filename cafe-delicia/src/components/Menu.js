import React from 'react'
import MenuCard from './MenuCard';

function Menu({coffeeList}) {

    const coffeeItems = coffeeList.map(coffee => {
        return <MenuCard 
        key = { coffee.id }
        coffee = { coffee }
        />
    })

    return(
        <div>
            <h1>Menu</h1>
            {coffeeItems}
        </div>
    )
}

export default Menu;