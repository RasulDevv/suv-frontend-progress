import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = () => {
  const [sensorData, setSensorData] = useState([]);

  const getSensorData = () => {
    const newData = {
      time: new Date().toLocaleTimeString(),
      sensor1: Math.random() * 20,
      sensor2: Math.random() * 50
    };
    setSensorData((prevData) => [...prevData.slice(-50), newData]); // Oxirgi 50 qiymatni saqlash
  };

  useEffect(() => {
    const interval = setInterval(getSensorData, 1000); // Har 1 soniyada yangilanadi
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ overflowX: 'scroll', overflowY: 'hidden', width: '100%' }}>
      <div style={{ width: '2400px' }}>
        <LineChart width={2400} height={400} data={sensorData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sensor1" stroke="red" name="PH" />
          <Line type="monotone" dataKey="sensor2" stroke="blue" name="LOYQALIK" />
        </LineChart>
      </div>
    </div>
  );
};

export default BarChart;
