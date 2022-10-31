import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"

const url = "http://localhost:1234/functionality/"

export default function MyFunctionalitiesPage() {
  const [functionalities, set_functionalities] = useState()
  const [me, set_me] = useRecoilState(me_state)
  const [email, set_email] = useState("partenaire@ob.io")
  const [password, set_password] = useState("123456")
  const [street, set_street] = useState("Avenue Gle De Gaulle")
  const [active, set_active] = useState(true)

  console.log(functionalities)

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

  if (!functionalities) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1 className="title">Structure</h1>
      <div className="container">
        <ul>
          {functionalities.map(({ active, name, id: f_id }) => (
            <li key={f_id}>
              <label htmlFor={`functionality_${f_id}`}>
                <input
                  id={`functionality_${f_id}`}
                  disabled
                  checked={active}
                  type="checkbox"
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )

  async function load_functionalities_by_structure() {
    console.log(me)

    const { data } = await axios.get(
      "http://localhost:1234/my-functionalities",
      {
        headers: {
          Authorization: `Bearer ${me.token}`,
        },
      }
    )
    set_functionalities(data.functionalities)
  }
}
