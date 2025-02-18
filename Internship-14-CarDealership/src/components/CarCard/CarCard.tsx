import React from "react";
import "./CarCard.css";

function CarCard({ car }) {
  const carName = car.brand.concat(" ", car.model);

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

      <button className="remove-car-button">Remove</button>
    </div>
  );
}

export default CarCard;
