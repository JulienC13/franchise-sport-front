import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { me_state } from "../recoil";

const url = "http://localhost:1234/partners/";
export default function ManagaPartnersPage() {
  const [partners, set_partners] = useState();
  const [me, set_me] = useRecoilState(me_state);

  useEffect(() => {
    load_partners();
  }, []);

  if (!partners) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1 className="title">Partenaire</h1>
      <div className="container">
        {partners.map(({ id, city, active }) => (
          <li key={id}>
            <input
              checked={active}
              onChange={() => toggle_partner(id, !active)}
              type="checkbox"
            />
            {city}
          </li>
        ))}
      </div>
    </main>
  );

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
    );
    await load_partners();
  }

  async function load_partners() {
    console.log(me);

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${me.token}`,
      },
    });
    set_partners(data);
  }
}
