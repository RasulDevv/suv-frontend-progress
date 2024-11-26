const arr = [
  {
    "_id": "672b3e2ddcd4b9bb278439f9",
    "name": "pH_sensor",
    "accuracy": "±0.01 pH",
    "range": "0 - 14",
    "normal-range": "6.5 - 8.5",
    "createdAt": "2024-11-10T07:16:48.472Z",
    "updatedAt": "2024-11-10T07:16:48.472Z",
    "__v": 0
  },
  {
    "_id": "672b3e68dcd4b9bb278439fa",
    "name": "turbidity_sensor",
    "accuracy": "±5 NTU",
    "range": "0 - 1000 NTU",
    "normal-range": "0 - 1 NTU",
    "createdAt": "2024-11-10T07:17:30.243Z",
    "updatedAt": "2024-11-10T07:17:30.243Z",
    "__v": 0
  },
  {
    "_id": "672b3eb8dcd4b9bb278439fb",
    "name": "dissolved_oxygen_sensor",
    "accuracy": "±0.1 mg/L",
    "range": "0 - 20 mg/L",
    "normal-range": "6.5 - 8 mg/L",
    "createdAt": "2024-11-10T07:25:21.879Z",
    "updatedAt": "2024-11-10T07:25:21.879Z",
    "__v": 0
  },
  {
    "_id": "6730edc8813cab96a0139f61",
    "name": "contaminant_sensor",
    "accuracy": "±10 ppm",
    "range": "0 - 1000 ppm",
    "normal-range": ""
  }
]


export default function AboutSensors() {
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
          {arr.map(el => (
            <tr id={el._id}>
              <td>{el.name}</td>
              <td>{el.accuracy}</td>
              <td>{el.range}</td>
              <td>{el["normal-range"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
