import React from 'react';

function FormField({ type, value, onChange, name, label }) {
  return (
    <>
      <label> {label}: 
        <input 
          type={type}
          placeholder="Categoria"
          value={value}
          name={name} 
          onChange={onChange}
        />
      </label>
    </>
  )
}

export default FormField
