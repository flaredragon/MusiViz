import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Stats from './Components/Stats.js';
import Home from './Components/Home.js';
		
class App extends Component {

  render() {
    return (
	<Router>
	   <Switch>
		<Route exact path="/" component={Home} />
		<Route path="/stats" component={Stats}/>
      	   </Switch>
      	</Router>
    );
  }
}

export default App;
