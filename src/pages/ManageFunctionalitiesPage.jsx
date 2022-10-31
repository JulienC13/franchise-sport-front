import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"

const url = "http://localhost:1234/functionality/"

export default function ManageFunctionalitiesPage() {
  const [functionalities_by_structure, set_functionalities_by_structure] =
    useState()
  const [me, set_me] = useRecoilState(me_state)
  const [email, set_email] = useState("partenaire@ob.io")
  const [password, set_password] = useState("123456")
  const [street, set_street] = useState("Avenue Gle De Gaulle")
  const [active, set_active] = useState(true)

  useEffect(() => {
    load_functionalities_by_structure()
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
      await load_functionalities_by_structure()
      alert("Strucrture ajoutée!")
      set_email("")
      set_password("")
      set_active(false)
    } catch (error) {
      alert("Existe deja")
    }
  }

  if (!functionalities_by_structure) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1 className="title">Structure</h1>
      <div className="container">
        {functionalities_by_structure.map(
          ({ id, street, partner, functionalities }) => (
            <li key={id}>
              <b>
                {street} ({partner.city})
              </b>
              <ul>
                {functionalities.map(({ active, name, id: f_id }) => (
                  <label htmlFor={`functionality_${f_id}`}>
                    <input
                      id={`functionality_${f_id}`}
                      checked={active}
                      onChange={() => toggle_functionality(f_id, id, !active)}
                      type="checkbox"
                    />
                    {name}
                  </label>
                ))}
              </ul>
            </li>
          )
        )}
      </div>
    </main>
  )

  async function toggle_functionality(id, s_id, active) {
    await axios.put(
      url + `${s_id}/${id}`,
      {
        active,
      },
      {
        headers: {
          Authorization: `Bearer ${me.token}`,
        },
      }
    )
    await load_functionalities_by_structure()
  }

  async function load_functionalities_by_structure() {
    console.log(me)

    const { data } = await axios.get(
      "http://localhost:1234/functionalities-by-structure",
      {
        headers: {
          Authorization: `Bearer ${me.token}`,
        },
      }
    )
    set_functionalities_by_structure(data)
  }
}
