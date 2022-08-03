import React, {useState} from 'react'



function MenuForm() {

    const [ quantity, setQuantity ] = useState('')
    const [ syrup, setSyrup ] = useState('')
    const [ size, setSize ] = useState('')
    const [ checked, setChecked ] = useState(false)



    const handleChange= (e) => {
        return(
            setQuantity(e.target.value)
        )
    }
    const handleChangeSyrup= (e) => {
        return(
            setSyrup(e.target.value)
        )
    }
    const handleChangeSize= (e) => {
        return(
            setSize(e.target.value)
        )
    }

    const handleCheck = (e) => {
        return(
            setChecked(checked => !checked)
        )
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        

    }


    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <label htmlFor='syrup'>Select Syrup:</label>
                <select onChange = { handleChangeSyrup } >
                    <option value="none">None</option>
                    <option value="whitechocolate">White Chocolate</option>
                    <option value="milkchocolate">Milk Chocolate</option>
                    <option value="caramel">Caramel</option>
                </select>
                <label htmlFor='size'>Select Size:</label>
                <select onChange = { handleChangeSize } >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <input 
                    onChange={ handleChange } 
                    type="number"
                    name="price"
                    step="1.0"
                    placeholder="QTY"
                    style= {{ width: '30px' }} />
                <label htmlFor='iced'>Make iced:</label>
                <input
                    onChange={ handleCheck }
                    type ="checkbox"
                    style= {{ transform: 'scale(1)', margin: '10px' }} />
                <button type='submit'>Add To Cart</button>
            </form>
    
        </div>
    )
}

export default MenuForm;