import React from "react";
import CarCard from "../CarCard/CarCard";
import "./CarList.css";

function CarList({ carList, setCarList }) {
  const sortedCarList = carList.sort(
    (a, b) =>
      a.year - b.year ||
      a.brand.localeCompare(b.brand) ||
      a.model.localeCompare(b.model)
  );

  return (
    <div className="list-container">
      {sortedCarList.map((car) => (
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
