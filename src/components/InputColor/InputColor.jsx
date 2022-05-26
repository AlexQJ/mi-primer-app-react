import React from 'react'

const InputColor = ( {colorValue} ) => {

  const handleChange = (e)=>{
    /* console.log(e.target.value); */
    colorValue(e.target.value)
  }

  return (
    <input onChange={(e)=>{handleChange(e)}} type="color" />
  )
}

export default InputColor