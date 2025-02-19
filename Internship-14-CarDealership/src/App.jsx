import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import CarList from "./components/CarList/CarList";
import Filter from "./components/Filter/Filter";

function App() {
  const [carList, setCarList] = useState(
    JSON.parse(localStorage.getItem("cars") || "[]")
  );
  const [filteredCarList, setFilteredCarList] = useState(carList);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(carList)),
      setFilteredCarList(carList);
  }, [carList]);

  return (
    <main className="main">
      <div className="form-and-filter">
        <Form setCarList={setCarList} />
        <Filter carList={carList} setFilteredCarList={setFilteredCarList} />
      </div>
      <CarList carList={filteredCarList} setCarList={setCarList} />
    </main>
  );
}

export default App;
