import React from "react";
import { useState } from "react";

function Input({ type, placeholder, name, required }) {
  const [options, setOptions] = useState([
    "Motor",
    "Car",
    "Truck",
    "Bus",
    "Bike",
  ]);

  return (
    <>
      {type === "select" ? (
        <>
          <label htmlFor={name}>{placeholder}</label>
          <select name={name} required={required}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <label htmlFor={name}>{placeholder}</label>
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            name={name}
            required={required}
          />
        </>
      )}
    </>
  );
}

export default Input;
