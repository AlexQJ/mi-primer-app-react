import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/hello/hello';
import InputColor from './components/InputColor/InputColor';
import InputRange from './components/InputRange/InputRange';
import InputText from './components/InputText/InputText';
import FormPatients from './components/FormPatients/FormPatients';
import CardPatient from './components/CardPatient/CardPatient';

function App() {

  /* 
  * Ejercicio 1
  const [text, setText] = useState('Hola');
  const [color, setColor] = useState('#121212');
  const [fontSize, setFontSize] = useState('30px'); 
  */
  const [patients, setPatients] = useState([]);

  const addPatient = (data)=>{
      setPatients(
        [...patients, data]
      )
  }
 
  const pacientes = [
    {
      name: 'maria',
      edad: 26,
      altura: 160,
      motivo: "dolor"
    },
    {
      nombre: 'fernanda',
      edad: 36,
      altura: 150,
      motivo: "nauseas"
    },
    {
      nombre: 'alejandra',
      edad: 25,
      altura: 162,
      motivo:"dolor"
    },
    {
      nombre: 'antonio',
      edad: 27,
      altura: 171,
      motivo: "cancer"
    }
  ];

  return (
    <div className="App">

      {/*
        * Ejercicio 1
      <h1 style={{
        color: color,
        fontSize: fontSize
      }}>
        { text }
      </h1>

    <InputText textValue={setText} />
    <InputColor colorValue={setColor} />
    <InputRange fontSizeValue={setFontSize} /> */}

    


    <FormPatients formValue={ addPatient } />

    {
      patients.map((paciente, i)=>{
        return (
         <CardPatient data={ paciente } key={i} />
        )
      })
    }
    </div>
  );
}

export default App;
