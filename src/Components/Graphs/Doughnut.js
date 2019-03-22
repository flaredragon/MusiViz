import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { doughnutData } from '../../default/graphLayout';
import Tilt from 'react-tilt';
import '../../index.css';

class Bar extends Component {
	componentWillMount() {
		doughnutData.labels = this.props.names;
		doughnutData.datasets[0].data = this.props.danceability;
	}
	render() {
		return (
			<React.Fragment>
				<Tilt className="Tilt aa" options={{ max: 5, scale: 1 }} >
					<div className="Tilt-inner">
						<br></br>
						<div className="sign">
							<span className="neon">Danceability</span>
						</div>
						<br></br>
						<Doughnut data={doughnutData} /></div>
				</Tilt>
			</React.Fragment>
		);
	}
};

export default Bar
