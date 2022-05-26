import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormPatients = ({ formValue }) => {
  const [formState, setFormState] = useState('');

    const handleClick = ()=>{
      formValue(formState)
      
    }

    const setValues = (event)=>{
      console.log(event)
      setFormState({
        ...formState,
        // Recibe el evento, el target (el input que lo accionó) y el name (atributo name del input. No confundir con el name dado por el desarrollador que es el valor del name)
        [event.target.name]:event.target.value,
        // La key se pone entre corchetes, y el valor se pondra despues te los 2puntos.
      })
    }

  return (
    <>
    {console.log('->>>', formState)}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" onBlur={(evento)=>setValues(evento)} placeholder="Ingresa tu nombre" />
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" name="edad" onBlur={(evento)=>setValues(evento)}  placeholder="Ingresa tu edad" />
        <Form.Label>Estatura</Form.Label>
        <Form.Control type="number" name="estatura" onBlur={(evento)=>setValues(evento)} placeholder="Ingresa tu estatura en cms" />
        <Form.Label>Motivo de visita</Form.Label>
        <Form.Control type="text" name="motivo" onBlur={(evento)=>setValues(evento)}  placeholder="Ingresa el motivo de tu visita" />
      </Form.Group>

      <Button variant="primary" type="button" onClick={(e)=>handleClick(e)}>
        Enviar
      </Button>
    </Form>
    </>
  );
};

export default FormPatients;
