import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { lineData } from '../../default/graphLayout';
import Tilt from 'react-tilt';
import '../../index.css';

class LineGraph extends Component {
	componentWillMount() {
		lineData.labels = this.props.names;
		lineData.datasets[0].data = this.props.tempo;
		lineData.datasets[1].data = this.props.energy;
	}

	render() {
		return (
			<React.Fragment>
				<Tilt className="Tilt aa" options={{ max: 5, scale: 1 }} >
					<div className="Tilt-inner">
						<br></br>
						<div className="sign">
							<span className="neon">Energy</span>
						</div>
						<br></br>
						<Line data={lineData} options={{
							scales: {
								xAxes: [{
									ticks: {
										beginAtZero: true,
									},
									gridLines: {
										display: false,
										lineWidth: 3,
										color: '#fff',
										zeroLineWidth: 3,
										zeroLineColor: '#fff'
									}
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: '#fff',
										lineWidth: 3,
										zeroLineWidth: 3,
										zeroLineColor: '#fff'
									}
								}]
							}
						}} />
					</div>
				</Tilt>
			</React.Fragment>
		);
	}
};

export default LineGraph
