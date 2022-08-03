import React from 'react'
import MenuForm from './MenuForm'


function MenuCard({coffee, onAdd}) {


    return(
        <div className= 'card'>
            <img src = {coffee.image} alt={coffee.name} className="card-image"/>
            {/* <div className="card__content"> */}
            <div className="coffee-title">{coffee.name}</div>
            <p className="coffee-text">{coffee.description}</p>
            <p className="coffee-price">${coffee.price}</p>
            <button onClick={() => onAdd(coffee)} type='submit'>Add To Cart</button>
        </div>
    );
}

export default MenuCard;