import React from "react";
import { useState, useEffect } from "react";
import CarCard from "../CarCard/CarCard";
import "./CarList.css";

function CarList() {
  const [carList, setCarList] = useState(
    JSON.parse(localStorage.getItem("cars") || "[]")
  );

  return (
    <div className="list-container">
      {carList.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
