import React, { Component } from 'react';
import logo from '../logo.svg';
import spotify from '../assets/spotify-16.png';
class Home extends Component {
	

  render() {
    return (
	   <React.Fragment>
	    <div className="App-header">
	          <h1 className="heading-main">Spot Your Song</h1>
	    </div>
		  <h3 className="text-main">An App to visualize and analyze your favourite songs</h3>
		  <div className="login-wrapper">
		  <a
		    className="btn btn-success login-spotify"
		    href="https://stark-dawn-75160.herokuapp.com/login"
		    target="_self"
		    rel="noopener noreferrer">
		    <img src={spotify} className="spotify-icon"/>
		    Login With Spotify
		  </a>	
		  </div>
	    </React.Fragment>
	   );	
       }
}

export default Home;
