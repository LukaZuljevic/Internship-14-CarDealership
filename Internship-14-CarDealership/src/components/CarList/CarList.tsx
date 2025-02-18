import React from "react";
import CarCard from "../CarCard/CarCard";
import "./CarList.css";

function CarList({ carList, setCarList }) {
  return (
    <div className="list-container">
      {carList.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          carList={carList}
          setCarList={setCarList}
        />
      ))}
    </div>
  );
}

export default CarList;
