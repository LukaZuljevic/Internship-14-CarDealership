import React from "react";
import "./CarCard.css";

function CarCard({ car, carList, setCarList }) {
  const carName = car.brand.concat(" ", car.model);

  const handleRemoveClick = () => {
    const filteredCarList = carList.filter((c) => c.id != car.id);
    localStorage.setItem("cars", JSON.stringify(filteredCarList));
    setCarList(filteredCarList);
  };

  return (
    <div className="car-card">
      <h1 className="car-title">{carName}</h1>
      <p className="car-info">
        Type: <span>{car.type}</span>
      </p>
      <p className="car-info">
        Year: <span>{car.year}</span>
      </p>
      <p className="car-info">
        Expiration: <span>{car.expiration}</span>
      </p>

      <button className="remove-car-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
}

export default CarCard;
