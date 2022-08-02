import React from 'react'


function MenuCard({coffee}) {

    console.log(coffee)

    return(
        <li className="card-item">
            <div className= 'card'>
               <img src = {coffee.image} alt={coffee.name} className="card-image"/>
               <div className="card__content">
               <div className="coffee-title">{coffee.name}</div>
               <p className="coffee-text">{coffee.description}</p>
               <p className="coffee-price">${coffee.price}</p>
            </div>
            </div>
        </li>

    )
}

export default MenuCard;