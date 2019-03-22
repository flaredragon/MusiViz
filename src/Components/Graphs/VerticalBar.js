import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { vBarData } from '../../default/graphLayout';
import Tilt from 'react-tilt';
import '../../index.css';

class VerticalBar extends Component {
	componentWillMount() {
		vBarData.labels = this.props.names;
		vBarData.datasets[0].data = this.props.speechiness;
		vBarData.datasets[1].data = this.props.acousticness;
	}
	render() {
		return (
			<div>
				<Tilt className="Tilt aa" options={{ max: 5, scale: 1 }} >
					<br />
					<div className="Tilt-inner">
						<div className="sign">
							<span className="flux">Taste</span>
						</div>
						<br></br>
					</div>
					<Bar data={vBarData} options={{
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
				</Tilt>
			</div>
		);
	}
};

export default VerticalBar
