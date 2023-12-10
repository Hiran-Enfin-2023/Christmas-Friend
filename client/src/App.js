import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
