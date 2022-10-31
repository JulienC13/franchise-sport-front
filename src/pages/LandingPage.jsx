import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"
import { Role } from "../type_definitions"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, set_email] = useState("staff@ob.io")
  const [password, set_password] = useState("123456")
  const [me, set_me] = useRecoilState(me_state)
  const [error, set_error] = useState("")

  const disabled = !email || !password
  return (
    <main
      style={{
        padding: 50,
      }}
    >
      <p style={{ color: "red" }}>{error}</p>
      <h1>Se connecter</h1>
      <p>En tant que...</p>
      <div
        style={{
          display: "grid",
          gap: 10,
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => set_email(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => set_password(e.target.value)}
          placeholder="Mot de passe"
        />
      </div>
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 10,
        }}
      >
        <button onClick={login_as_staff} disabled={disabled}>
          Membre du staff
        </button>
        <button onClick={login_as_partner} disabled={disabled}>
          Partenaire
        </button>
        <button onClick={login_as_structure} disabled={disabled}>
          Structure
        </button>
      </div>
    </main>
  )

  async function login_as(role) {
    set_error("")
    try {
      const { data } = await axios.post(`http://localhost:1234/login`, {
        email,
        password,
        role,
      })

      set_me(data)

      switch (role) {
        case Role.staff:
          navigate("/manage-partners")
          break
        case Role.partner:
          navigate("/manage-structures")
          break
        case Role.structure:
          navigate("/my-functionalities")
          break
      }
    } catch (error) {
      set_error(error.response.data.message)
    }
  }

  function login_as_staff() {
    login_as(Role.staff)
  }
  function login_as_partner() {
    login_as(Role.partner)
  }
  function login_as_structure() {
    login_as(Role.structure)
  }
}
