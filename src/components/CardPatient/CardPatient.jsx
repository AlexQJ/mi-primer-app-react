import React from 'react'

const CardPatient = ({data}) => {
  return (
    <div>   
    <h3>{data.nombre}</h3>
    <p>{data.edad}</p>
    <p>{data.altura}</p>
    <p>{data.motivo}</p>
  </div>
  )
}

export default CardPatient