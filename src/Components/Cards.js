import React, { Component } from 'react';

class Cards extends Component {

	render(){
		const items = this.props.tracks.map((track, key) =>
			<div className="col-xs-6 col-sm-6 col-lg-3">
				<div className="card fix-height">
					<a className="img-card" href={track.external_urls.spotify}>
						<img src={track.album.images[0].url} alt="icon"/>
					</a>
					<div className="card-content">
						<h4 className="card-title">
							{track.name}
						</h4>
						<p>
							{track.album.name}
						</p>
					</div>
					<a className="btn btn-outline-light bottom-up-10" href={track.external_urls.spotify}>
						Play this Song
                    </a>
				</div>
			</div>
		);
		return (
			<section className="wrapper">
				<div className="container-fostrap">
					<div className="content">
						<div className="row">
							{items}
						</div>
					</div>
				</div>
			</section>
		);		
	}

}

export default Cards
