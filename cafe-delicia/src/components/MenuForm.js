import React, {useState} from 'react'


function MenuForm() {

    const [ value, setValue ] = useState('')

const handleChange= (e) => {
    return(
    setValue(e.target.value)
    )
}


    return(
        <div>
            <form>
            Select Syrup:
         <select>
            <option value="none">None</option>
            <option value="whitechocolate">White Chocolate</option>
            <option value="milkchocolate">Milk Chocolate</option>
            <option value="caramel">Caramel</option>
         </select>
         Select Size:
         <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
         </select>
         <input onChange={ handleChange } 
            type="number"
            name="price"
            step="1.0"
            placeholder="QTY"
            style= {{ width: '30px' }} />
             make iced?
         <input
            type ="checkbox"
            style= {{ transform: 'scale(1)', margin: '10px' }} />
         <button type='submit'>Add To Cart</button>
         </form>
        </div>
    )
}

export default MenuForm;