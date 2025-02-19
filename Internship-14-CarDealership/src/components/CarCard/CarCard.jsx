import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./CarCard.css";

function CarCard({ car, carList, setCarList }) {
  const carName = car.brand.concat(" ", car.model);

  const handleRemoveClick = () => {
    const filteredCarList = carList.filter((c) => c.id != car.id);
    localStorage.setItem("cars", JSON.stringify(filteredCarList));
    setCarList(filteredCarList);

    toast.success("Successdully removed a car!");
  };

  const currentDate = new Date();
  const isExpiring =
    new Date(car.expiration) <
    new Date(currentDate.setMonth(currentDate.getMonth() + 1));

  return (
    <div className={`car-card ${isExpiring ? "expiring-soon" : ""}`}>
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
      <Toaster />
    </div>
  );
}

export default CarCard;
