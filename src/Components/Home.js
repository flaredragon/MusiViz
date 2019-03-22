import React, { Component } from 'react';
import spotify from '../assets/spotify-16.png';
import github from '../assets/github-32.png';

class Home extends Component {


	render() {
		return (
			<React.Fragment>
				<a href="https://github.com/flaredragon/MusiViz">
				<img className="github-icon" src={github} alt="Github Icon"/>
				</a>
				<div className="App-header">
					<h1 className="heading-main">Musi-Viz</h1>
				</div>
				<h3 className="text-main">An App to visualize and analyze your favourite songs</h3>
				<div className="login-wrapper">
					<a
						className="btn btn-success login-spotify"
						href="http://localhost:4000/login"
						target="_self"
						rel="noopener noreferrer">
						<img src={spotify} className="spotify-icon" />
						Login With Spotify
		 			</a>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
