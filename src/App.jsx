import React, { useState } from "react";
import "./App.css";
import TodoApp from "./components/Todolist/TodoApp";
import TodoList from "./components/Todolist/TodoList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Partner from "./components/Pages/Partner";
import Structure from "./components/Pages/Structure";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Technician from "./components/Pages/Technician";
import Login from "./components/Pages/Login";
import LandingPage from "./components/Pages/LandingPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/partenaire/:id" element={<Partner />} />
        <Route exact path="/structure/:id" element={<Structure />} />
        <Route exact path="/contact/" element={<Contact />} />
        <Route exact path="/login/" element={<Login />} />
        <Route exact path="/technicien/:id" element={<Technician />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
