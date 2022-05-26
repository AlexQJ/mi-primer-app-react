import React from 'react'

  // * fontSizeValue (puede llamarse como sea) es el valor que recibe de useState,(en este caso modifica el valor de setFontSize en el archivo App.js)

const InputRange = ({ fontSizeValue }) => {
  const handleChange = (e)=>{
    /* console.log(e.target.value) */
    // * Aqui se modifica el valor recibido de fontSizeValue. (setFontSize del useState) dependiendo del valor del input de este componente que se ejecuta en onChange y llama a esta funcion.
    fontSizeValue(e.target.value+'px');
  }

  return (
    <input 
    onChange={(e)=>handleChange(e)}  
    min="1"
    max="100"
    defaultValue="1" 
    type="range" />
  )
}

export default InputRange