import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontColor = '#fff';
defaults.global.legend.labels.usePointStyle = true;

export var doughnutData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [80.81, 20.20, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export var barData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: ['Popularity'],
        backgroundColor: ['#FF0073','purple','#FF0073','purple'],
        borderColor: '#fff',
        borderWidth: 3,
        data: [65, 59, 80,90]
      }
    ]
  };
  
export var radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping'],
    datasets: [
      {
        label: 'Tempo',
        pointStyle:'circle',
        borderColor: '#fe8c00',
        backgroundColor:'rgba(254,140,0,0.2)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [40,42,41]
      }
    ]
  };
