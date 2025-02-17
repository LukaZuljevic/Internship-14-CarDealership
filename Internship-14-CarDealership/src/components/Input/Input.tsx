import React from "react";

function Input({ type, placeholder, name, value, onChange }) {
  const options = ["Motor", "Car", "Truck", "Bus", "Bike"];

  return (
    <div>
      {type === "select" ? (
        <>
          <label htmlFor={name}>{placeholder}</label>
          <select name={name} value={value} onChange={onChange} required>
            {options.map((option) => (
              <option key={option} value={option}>
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
            value={value}
            onChange={onChange}
            required
          />
        </>
      )}
    </div>
  );
}

export default Input;
