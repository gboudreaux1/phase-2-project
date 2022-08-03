import React from "react";



function DisplayCart({cartItems, onAdd, onRemove}) {


    return(
        <div>
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <img className='col-2' src={item.image} />
                    <div className='col-2' >{item.name}</div>
                    <div className='col-2' >
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='add'>-</button>
                    </div>
                <div className='col-2 text-right' >
                     {item.qty} x ${item.price.toFixed(2)}
                </div>
                </div>
            ))}
        </div>
    )
}


export default DisplayCart;