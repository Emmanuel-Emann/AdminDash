import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  const [data] = useState({
    labels: ['Eating 2k', 'Drinking 3k', 'Sleeping 4k', 'Designing 5k'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer>
      <Doughnut data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default DoughnutChart;