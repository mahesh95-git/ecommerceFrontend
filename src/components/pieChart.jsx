
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


 function PieChart() {
    
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['MALE', 'FEMALE'],
  datasets: [
    {
      label: 'ration',
      data: [60,40 ],
      backgroundColor: [
        '#dd5f12a6',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};
  return <Pie data={data} />;
}

export default PieChart;