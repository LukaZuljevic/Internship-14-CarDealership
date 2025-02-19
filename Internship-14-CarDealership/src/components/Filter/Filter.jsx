import React, { useState } from "react";
import Input from "../Input/Input";
import "./Filter.css";

function Filter({ carList, setFilteredCarList }) {
  const [carName, setCarName] = useState("");

  const handleFilterChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setCarName(inputValue);

    const filteredCars = carList.filter((car) => {
      const fullCarName = car.brand.concat(" ", car.model).toLowerCase();
      return fullCarName.includes(inputValue);
    });

    setFilteredCarList(filteredCars);
  };

  return (
    <div className="filter">
      <Input
        type="text"
        placeholder="Filter by car name(brand + model)"
        name="filter"
        value={carName}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Filter;
