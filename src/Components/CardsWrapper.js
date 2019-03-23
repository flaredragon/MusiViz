import React, { Component } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';
import Bar from './Graphs/Bar';
import Doughnut from './Graphs/Doughnut';
import Line from './Graphs/Line';
import Cards from './Cards';
import VerticalBar from './Graphs/VerticalBar';
import '../spinner.css';

let spotifyApi = new SpotifyWebApi();

class CardsWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [],
			loading: false,
			danceability: [],
			energy: [],
			loudness: [],
			tempo: [],
			popularity: [],
			acousticness: [],
			speechiness: [],
			names: [],
			instrumentalness: [],
			valence: [],
		}
	}
	async componentWillMount() {
		this.setState({ loading: true });
		spotifyApi.setAccessToken(this.props.token);
		let ids = [], names = [], danceability = [], energy = [], loudness = [], tempo = [], popularity = [], acousticness = [], speechiness = [], instrumentalness = [], valence = [];
		var data = await spotifyApi
			.getMyTopTracks({ limit: 4, time_range: 'long_term' })
			.then((data, err) => {
				console.log(data);
				if (err) console.error(err);
				else {
					return data.items;
				}
			});
		if(data.length>0) {
		data.forEach((track) => {
			ids.push(track.id);
			popularity.push(track.popularity);
			names.push(track.name);
		});
		var audioFeatures = await spotifyApi
			.getAudioFeaturesForTracks(ids)
			.then((data, err) => {
				console.log(data);
				if (err) console.error(err);
				else {
					return data.audio_features;
				}
			});
		audioFeatures.forEach((track) => {
			danceability.push(track.danceability);
			energy.push(track.energy * 170);
			loudness.push(track.loudness);
			tempo.push(track.tempo);
			valence.push(track.valence * 100);
			acousticness.push(track.acousticness * 1000);
			speechiness.push(track.speechiness * 1000);
			instrumentalness.push(track.instrumentalness * 1000);
		});
		}
		await this.setState({ tracks: data, names, danceability, energy, loudness, tempo, popularity, acousticness, speechiness, instrumentalness, valence, loading: false });
	}

	render() {
		if (this.state.loading)
			return (<div className="loaders"><div className="spinner"></div></div>);
		else if(this.state.tracks.length>0){
			return (
				<React.Fragment>
					<Cards tracks={this.state.tracks}/>
					<Bar valence={this.state.valence} popularity={this.state.popularity} names={this.state.names} />
					<Doughnut danceability={this.state.danceability} names={this.state.names} />
					<VerticalBar acousticness={this.state.acousticness} speechiness={this.state.speechiness} names={this.state.names} />
					<Line tempo={this.state.tempo} energy={this.state.energy} names={this.state.names} />
				</React.Fragment>
			);
		}
		else return(<div className="loaders no-songs">Start Listening Songs on Spotify Today!</div>);
		}
}

export default CardsWrapper;

