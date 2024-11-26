import { useEffect, useState } from "react";
import BarChart from "../molecules/BarChart";
import { Link } from "react-router-dom";

export default function Home() {
  const [districts, setDistricts] = useState([])
  useEffect(() => {
    async function name(params) {
      await fetch("https://suv-backend.onrender.com/districts")
      .then(res => res.json())
      .then(data => setDistricts(data))
      .catch(err => console.log(err))
    }
    name()
  }, [])
  
  return (
    <div className='home-page'>
      <form>
        <input type="text" placeholder='search location...' />
      </form>
      <ul>
        <li>
          <Link to={'d/olmazor'}>Olmazor</Link>
        </li>
        <li>
          <Link to={'d/chilonzor'}>Chilonzor</Link>
        </li>
      </ul>
    </div>
  )
}
