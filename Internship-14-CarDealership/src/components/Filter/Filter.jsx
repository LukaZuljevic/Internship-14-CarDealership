import React, { useState } from "react";
import Input from "../Input/Input";
import "./Filter.css";

function Filter({ carList, setFilteredCarList }) {
  const [carName, setCarName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

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
    <>
      <button
        className="show-filter-button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide filter" : "Show filter"}
      </button>
      {isVisible ? (
        <div className="filter">
          <Input
            type="text"
            placeholder="Filter by car name (brand + model)"
            name="filter"
            value={carName}
            onChange={handleFilterChange}
          />
        </div>
      ) : null}
    </>
  );
}

export default Filter;
