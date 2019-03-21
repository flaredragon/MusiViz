import React, {Component} from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';
let spotifyApi = new SpotifyWebApi();

class Cards extends Component {
	constructor(props){
		super(props);
		this.state = {
			tracks:[],
			loading:false,
		}	
	}
	async componentDidMount(){
		this.setState({loading:true});
		spotifyApi.setAccessToken(this.props.token);
		var data = await spotifyApi.getMyTopTracks({limit:4,time_range:'long_term'})
						.then((data,err) => { 			
								if (err) console.error(err);
						  		else {
						  			console.log('Artist albums', data);
						  			return data.items;
						  		}
						});							
		this.setState({tracks:data,loading:false});
		console.log(this.state.tracks);
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
		);
	    }
	}
}

export default Cards;

