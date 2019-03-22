import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontColor = '#fff';
defaults.global.legend.labels.usePointStyle = true;
defaults.global.defaultFontFamily = 'Quicksand';

export var doughnutData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [80.81, 20.20, 100],
		backgroundColor: [
		'#58B3DD',
		'#734EDD',
		'#D810DB',
		'#EA4D82',
		],
		hoverBackgroundColor:  [
		'#58B3DD',
		'#734EDD',
		'#D810DB',
		'#EA4D82',
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
  
export var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Tempo',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,200,0.4)',
      borderColor: 'rgba(75,192,200,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,200,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Energy',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(87,225,168,0.4)',
      borderColor: 'rgba(87,225,168,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(87,225,168,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(87,225,168,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }

  ]
};
