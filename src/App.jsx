import "./App.css";
import { Routes, Route } from "react-router-dom";
import Partner from "./components/Pages/Partner";
import Structure from "./components/Pages/Structure";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Technician from "./components/Pages/Technician";
import LandingPage from "./components/Pages/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/partenaire/" element={<Partner />} />
        <Route exact path="/structure/" element={<Structure />} />
        <Route exact path="/contact/" element={<Contact />} />
        <Route exact path="/technicien/" element={<Technician />} />
        <Route exact path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
