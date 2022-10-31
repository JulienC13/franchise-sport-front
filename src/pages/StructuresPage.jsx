import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"

const url = "http://localhost:1234/structures/"

export default function StructuresPage() {
  const [structures, set_structures] = useState()
  const [me, set_me] = useRecoilState(me_state)
  const [email, set_email] = useState("partenaire@ob.io")
  const [password, set_password] = useState("123456")
  const [street, set_street] = useState("Avenue Gle De Gaulle")
  const [active, set_active] = useState(true)

  useEffect(() => {
    load_structures()
  }, [])

  async function submit() {
    try {
      await axios.post(
        url,
        {
          email,
          password,
          street,
        },
        {
          headers: {
            Authorization: `Bearer ${me.token}`,
          },
        }
      )
      await load_structures()
      alert("Strucrture ajoutée!")
      set_email("")
      set_password("")
      set_active(false)
    } catch (error) {
      alert("Existe deja")
    }
  }

  if (!structures) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1 className="title">Structure</h1>
      <div className="container">
        {structures.map(({ id, street, active }) => (
          <li key={id}>
            <label htmlFor={`structure_${id}`}>
              <input
                id={`structure_${id}`}
                checked={active}
                onChange={() => toggle_structure(id, !active)}
                type="checkbox"
              />
              {street}
            </label>
          </li>
        ))}
      </div>
      Ajouter une nouvelle structure
      <form
        style={{
          display: "grid",
          gap: 10,
        }}
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <input
          required
          value={email}
          placeholder="Email"
          onChange={(e) => set_email(e.target.value)}
        />
        <input
          required
          value={password}
          placeholder="Mot de passe a lui assigner"
          onChange={(e) => set_password(e.target.value)}
        />
        <input
          required
          value={street}
          placeholder="Nom de la rue"
          onChange={(e) => set_street(e.target.value)}
        />
        <label htmlFor="active">
          <input
            id="active"
            checked={active}
            placeholder="Activée"
            onChange={(e) => set_active(!active)}
            type="checkbox"
          />
          Activé
        </label>
        <button>Ajouter</button>
      </form>
    </main>
  )

  async function toggle_structure(id, active) {
    await axios.put(
      url + id,
      {
        active,
      },
      {
        headers: {
          Authorization: `Bearer ${me.token}`,
        },
      }
    )
    await load_structures()
  }

  async function load_structures() {
    console.log(me)

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${me.token}`,
      },
    })
    set_structures(data)
  }
}
