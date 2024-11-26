import { Suspense, useEffect, useState } from "react"

export default function AboutSensors() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://suv-backend.onrender.com/about-sensors')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="about-sensors-page">
      <table className="about-sensors-table">
        <thead>
          <tr>
            <th>name</th>
            <th>accuracy</th>
            <th>range</th>
            <th>normal range</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<p>loading...</p>}>
            {data.map(el => (
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.accuracy}</td>
                <td>{el.range}</td>
                <td>{el["normal-range"]}</td>
              </tr>
            ))}
          </Suspense>
        </tbody>
      </table>
    </div>
  )
}
