import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { barData } from '../../default/graphLayout';
import Tilt from 'react-tilt';
import '../../index.css';

class Bar extends Component {
	componentWillMount() {
		barData.labels = this.props.names;
		barData.datasets[0].data = this.props.popularity;
		barData.datasets[1].data = this.props.valence;
	}
	render() {
		return (
			<div>
				<Tilt className="Tilt aa" options={{ max: 5, scale: 1 }} >
					<br />
					<div className="Tilt-inner">
						<div className="sign">
							<span className="flux">Popularity</span>
						</div>
						<br></br>
					</div>
					<HorizontalBar data={barData} options={{
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

export default Bar
