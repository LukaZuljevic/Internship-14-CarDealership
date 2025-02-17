import React from "react";
import "./Form.css";
import Input from "../input/input";

function Form() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <Input type="text" placeholder="Car brand" name="brand" required />
      <Input type="text" placeholder="Car model" name="model" required />
      <Input type="select" placeholder="Car type" name="type" required />
      <Input
        type="number"
        placeholder="Year of production(1960-2025)"
        name="year"
        required
      />
      <Input
        type="date"
        placeholder="Date of registration expiration"
        name="expiration"
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
