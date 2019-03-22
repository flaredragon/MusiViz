import React, { Component } from 'react';
import Cards from './Cards.js'
import github from '../assets/github-32.png';
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
						console.log(data);
						return data;
					}
				});
			await this.setState({ user: data });
		}
	}

	render() {
		const user = (this.state.user ? <div className="user-wrapper"><img className="profile-small-img" src={this.state.user.images[0].url} /><a href={this.state.user.external_urls.spotify}>{this.state.user.display_name}</a></div> : null);
		if (!this.state.token)
			return (
				<div>No Token Found :P</div>
			);

		else {
			return (
				<React.Fragment>
					<div>
						<span className="page-icon heading-main">Spot Your Song</span>
						<a href="https://github.com/flaredragon/spotyoursong">
							<img className="github-icon" src={github} alt="Github Icon"/>
						</a>				
						{user}
					</div>
					<Cards token={this.state.token} />
				</React.Fragment>
			);
		}
	}

}

export default About;
