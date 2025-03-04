import React, { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function Form({ setCarList }) {
  const [carData, setCarData] = useState({
    brand: "",
    model: "",
    type: "",
    year: "",
    expiration: "",
  });

  const handleInputChange = (e) =>
    setCarData({ ...carData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    const carWithId = { ...carData, id: uuidv4() };

    setCarList((prevCars) => [...prevCars, carWithId]);

    setCarData({
      brand: "",
      model: "",
      type: "",
      year: "",
      expiration: "",
    });

    toast.success("Car added successfully");
  };

  const validateForm = () => {
    if (parseInt(carData.year) < 1960 || parseInt(carData.year) > 2025)
      return "Year of production must be between 1960 and 2025";

    if (new Date(carData.expiration) < new Date())
      return "Expiration date must be in the fture";

    if (carData.brand.length < 3 || carData.model.length < 3)
      return "Brand and model inputs must be at least 3 characters long";

    if (carData.brand.length > 20 || carData.model.length > 20)
      return "Brand and model inputs must be at most 20 characters long";

    const storedCars = JSON.parse(localStorage.getItem("cars") || "[]");
    if (storedCars.length >= 10) return "You can't add more than 10 cars";

    return null;
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Car brand"
        name="brand"
        value={carData.brand}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        placeholder="Car model"
        name="model"
        value={carData.model}
        onChange={handleInputChange}
      />
      <Input
        type="select"
        placeholder="Car type"
        name="type"
        value={carData.type}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        placeholder="Year of production (1960 - 2025)"
        name="year"
        value={carData.year}
        onChange={handleInputChange}
      />
      <Input
        type="date"
        placeholder="Date of registration expiration"
        name="expiration"
        value={carData.expiration}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
      <Toaster />
    </form>
  );
}

export default Form;
