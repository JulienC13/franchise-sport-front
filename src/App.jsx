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
import Auth from "./components/Auth/Auth";
import Profile from "./components/Pages/Profile";
import { hasAuthenticated } from "./components/Auth/AuthApi";
import AuthRoute from "./components/Auth/AuthRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Auth.Provider value={{ isAuthenticated }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/partenaire/:id" element={<Partner />} />
            <Route exact path="/structure/:id" element={<Structure />} />
            <Route exact path="/contact/" element={<Contact />} />
            <Route exact path="/login/" element={<Login />} />
            <Route exact path="/technicien/:id" element={<Technician />} />
            <Route exact path="/*" element={<Home />} />
            <AuthRoute path="/profil/" component={<Profile />} />
          </Routes>
        </div>
      </Auth.Provider>
    </>
  );
};

export default App;
