import "./App.css"
import { Routes, Route } from "react-router-dom"
import PartnersPage from "./pages/PartnersPage"
import PartnerContactTech from "./pages/PartnerContactTech"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Technician from "./pages/Technician"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import { useRecoilState } from "recoil"
import { me_state } from "./recoil"
import StructuresPage from "./pages/StructuresPage"
import ManageFunctionalitiesPage from "./pages/ManageFunctionalitiesPage"
import MyFunctionalitiesPage from "./pages/MyFunctionalitiesPage"

function ProtectedRoute({ only, children }) {
  const [me] = useRecoilState(me_state)

  if (!me) return <p>Tu dois etre connecté pour acceder a cette page</p>
  if (me.role != only)
    return <p>Tu dois avoir le role {only} pour acceder à cette page</p>

  return children
}

const Role = {
  staff: "STAFF",
  partner: "PARTNER",
  structure: "STRUCTURE",
}

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          path="/manage-partners"
          element={
            <ProtectedRoute only={Role.staff}>
              <PartnersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-structures"
          element={
            <ProtectedRoute only={Role.partner}>
              <StructuresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-functionalities"
          element={
            <ProtectedRoute only={Role.staff}>
              <ManageFunctionalitiesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-functionalities"
          element={
            <ProtectedRoute only={Role.structure}>
              <MyFunctionalitiesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
