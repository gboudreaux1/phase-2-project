import React from 'react'
// import { image } from '../components'

function Home() {

    const myStyle={
        backgroundImage: ('https://i.pinimg.com/564x/15/8e/5e/158e5ed35077140024e9808f6473e9c9.jpg'),
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return(
        <div style =  {myStyle }>
            <h1>Cafe Delicia</h1>
            <p>amazingly delicious or whatever</p>
            
        </div>
    )
}

export default Home;