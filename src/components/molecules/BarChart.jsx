import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
  datasets: [
    {
      label: 'Sotuvlar',
      data: [400, 300, 500],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

function BarChart() {
  return <Bar data={data} />;
}

export default BarChart;