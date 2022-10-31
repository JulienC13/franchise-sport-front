import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"

const url = "http://localhost:1234/partners/"

export default function ManagaPartnersPage() {
  const [partners, set_partners] = useState()
  const [me, set_me] = useRecoilState(me_state)
  const [email, set_email] = useState("p@io.dsf")
  const [password, set_password] = useState("123456")
  const [city, set_city] = useState("Nice")
  const [active, set_active] = useState(true)

  useEffect(() => {
    load_partners()
  }, [])

  async function submit() {
    try {
      await axios.post(
        url,
        {
          email,
          password,
          city,
        },
        {
          headers: {
            Authorization: `Bearer ${me.token}`,
          },
        }
      )
      await load_partners()
      alert("Partenaire ajouté!")
      set_email("")
      set_password("")
      set_active(false)
    } catch (error) {
      alert("Existe deja")
    }
  }

  if (!partners) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1 className="title">Partenaire</h1>
      <div className="container">
        {partners.map(({ id, city, active }) => (
          <li key={id}>
            <label htmlFor={`partner_${id}`}>
              <input
                id={`partner_${id}`}
                checked={active}
                onChange={() => toggle_partner(id, !active)}
                type="checkbox"
              />
              {city}
            </label>
          </li>
        ))}
      </div>
      Ajouter un nouveau partenaire
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
          value={city}
          placeholder="Ville"
          onChange={(e) => set_city(e.target.value)}
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

  async function toggle_partner(id, active) {
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
    await load_partners()
  }

  async function load_partners() {
    console.log(me)

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${me.token}`,
      },
    })
    set_partners(data)
  }
}
