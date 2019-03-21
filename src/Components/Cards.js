import React, {Component} from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';
import Bar from './Graphs/Bar';

let spotifyApi = new SpotifyWebApi();

class Cards extends Component {
	constructor(props){
		super(props);
		this.state = {
			tracks:[],
			loading:false,
			danceability:[],
			energy:[],
			loudness:[],
			tempo:[],
			popularity:[],
			acousticness:[],
			speechiness:[],
			names:[],
		}	
	}
	async componentWillMount(){
		this.setState({loading:true});
		spotifyApi.setAccessToken(this.props.token);
		let ids = [],names = [],danceability = [],energy = [],loudness = [],tempo = [],popularity = [],acousticness = [],speechiness = [];
		var data = await spotifyApi
						.getMyTopTracks({limit:4,time_range:'long_term'})
						.then((data,err) => { 			
								if (err) console.error(err);
						  		else {
						  			console.log('Artist albums', data);
						  			return data.items;
						  		}
						});
		data.map((track) => {
			ids.push(track.id);
			popularity.push(track.popularity);
			names.push(track.name);
		}); 
		var audioFeatures = await spotifyApi
								  .getAudioFeaturesForTracks(ids)
								  .then((data,err) => {
										if (err) console.error(err);
										else {
											console.log('Artist albums', data);
											return data.audio_features;
										}
								  });
		audioFeatures.map((track) => {
			danceability.push(track.danceability);
			energy.push(track.energy);
			loudness.push(track.loudness);
			tempo.push(track.tempo);
			acousticness.push(track.acousticness);
			speechiness.push(track.speechiness);
		});
	await this.setState({tracks:data,names,danceability,energy,loudness,tempo,popularity,acousticness,speechiness,loading:false});
		console.log(this.state);
	}
	
	render() {
		const items = this.state.tracks.map((track,key) =>
			<div className="col-xs-6 col-sm-6 col-lg-3">
                        <div className="card fix-height">
                            <a className="img-card" href={track.external_urls.spotify}>
                            	<img src={track.album.images[0].url} />
                          	</a>
                            <div className="card-content">
                                <h4 className="card-title">
                                    {track.name}
                                </h4>
                                <p>
                                   {track.album.name}
                                </p>
                            </div>
                                <button className="btn btn-outline-light bottom-up-10" href={track.external_urls.spotify}>
                                    Listen to the Song
                                </button>
                        </div>
                    </div>
		
		);
		if(this.state.loading)
		return(<div>Loading...</div>);
		else {
		return (
		<React.Fragment>
		<section className="wrapper">
    			<div className="container-fostrap">
    				<div className="content">
            			<div className="">
                			<div className="row">
                			{items}
                			</div>
                		</div>
                	</div>
                </div>
         </section>
         <Bar popularity={this.state.popularity} names={this.state.names}/>
         </React.Fragment>
		);
	    }
	}
}

export default Cards;

