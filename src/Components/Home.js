import React, { Component } from 'react';
import spotify from '../assets/spotify-16.png';
import github from '../assets/github-32.png';

class Home extends Component {


	render() {
		return (
			<React.Fragment>
				<iframe title="github-star" className="center star-github" src="https://ghbtns.com/github-btn.html?user=flaredragon&repo=MusiViz&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
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
						href="https://stark-dawn-75160.herokuapp.com/login"
						target="_self"
						rel="noopener noreferrer">
						<img src={spotify} className="spotify-icon" alt="icon" />
						Login With Spotify
		 			</a>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
