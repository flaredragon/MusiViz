import React, { Component } from 'react';
import logo from '../logo.svg';

class Home extends Component {
	

  render() {
    return (
	<div className="App">
	    <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p>Edit <code>src/App.js</code> and save to reload.</p>
		  <a
		    className="App-link"
		    href="http://localhost:4000/login"
		    target="_self"
		    rel="noopener noreferrer"
		  >
		    Learn React
		  </a>
		</header>
	      </div>	
	   );	
       }
}

export default Home;
