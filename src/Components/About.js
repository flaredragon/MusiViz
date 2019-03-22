import React, { Component } from 'react';
import Cards from './Cards.js'

class About extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			token:null,
		}	
  	}
  	
	async componentDidMount(){
		let params = (new URL(document.location)).searchParams;
		let code = params.get("access_token");
		if(code){
				this.setState({token:code});
			}
  	}
	
	render() {
	
		if(!this.state.token)
			return (
				<div>No Token Found :P</div>
			);
			
        else {
			return ( 
				<React.Fragment>
		   		<div className="nav">
				<span className="page-icon heading-main">Spot Your Song</span>
				</div> 
		   		<Cards token={this.state.token}/>
		   		</React.Fragment>
		   	);
		}
	}

}

export default About;
