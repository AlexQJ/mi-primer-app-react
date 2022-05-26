import React from "react";

const InputText = ({ textValue }) => {
  const handleChange = (e) => {
    /* console.log(e.target.value); */
    textValue(e.target.value);
  };
  return (
    <>
      <label htmlFor="texto">Introduce un texto </label><input id="texto" onChange={(e) => handleChange(e)}type="text" />
    </>
  );
};

export default InputText;
