import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/form";
import CarList from "./components/CarList/CarList";

function App() {
  const [carList, setCarList] = useState(
    JSON.parse(localStorage.getItem("cars") || "[]")
  );

  useEffect(
    () => localStorage.setItem("cars", JSON.stringify(carList)),
    [carList]
  );

  return (
    <main className="main">
      <Form setCarList={setCarList} />
      <CarList carList={carList} setCarList={setCarList} />
    </main>
  );
}

export default App;
