import React from "react";
import "./App.css";
import Form from "./components/form/form";
import CarList from "./components/CarList/CarList";

function App() {
  return (
    <>
      <main className="main">
        <Form />
        <CarList />
      </main>
    </>
  );
}

export default App;
