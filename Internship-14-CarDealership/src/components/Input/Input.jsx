import React from "react";
import "./Input.css";

function Input({ type, placeholder, name, value, onChange }) {
  const options = ["Motor", "Car", "Truck", "Bus", "Bike"];

  return (
    <div className="input-container">
      {type === "select" ? (
        <>
          <label htmlFor={name}>{placeholder}</label>
          <select
            className="form-input"
            name={name}
            value={value}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
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
            className="form-input"
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
