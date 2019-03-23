import React, { Component } from 'react';
import CardsWrapper from './CardsWrapper.js'
import github from '../assets/github-32.png';
import usericon from '../assets/user.png';
import * as SpotifyWebApi from 'spotify-web-api-js';

let spotifyApi = new SpotifyWebApi();

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			token: null,
			user: null,
		}
	}

	async componentDidMount() {
		let params = (new URL(document.location)).searchParams;
		let code = params.get("access_token");
		if (code) {
			await spotifyApi.setAccessToken(this.props.token);
			this.setState({ token: code });
			var data = await spotifyApi
				.getMe()
				.then((data, err) => {
					if (err) console.error(err);
					else {
						return data;
					}
				});
			await this.setState({ user: data });
		}
	}

	render() {
		const user = (this.state.user ? <div className="user-wrapper"><img className="profile-small-img" src={(this.state.user.images.length>0 ? this.state.user.images[0].url:usericon)} alt="icon"/><a href={this.state.user.external_urls.spotify}>{this.state.user.display_name}</a></div> : null);
		if (!this.state.token)
			return (
				<div>No Token Found :P</div>
			);

		else {
			return (
				<React.Fragment>
					<div>
						<span className="page-icon heading-main">Musi-Viz</span>
						<a href="https://github.com/flaredragon/MusiViz">
							<img className="github-icon" src={github} alt="Github Icon"/>
						</a>				
						{user}
					</div>
					<CardsWrapper token={this.state.token} />
				</React.Fragment>
			);
		}
	}

}

export default About;
