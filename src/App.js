import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './Components/About.js';
import Home from './Components/Home.js';
		
class App extends Component {

  render() {
    return (
	<Router>
	   <Switch>
		<Route exact path="/" component={Home} />
		<Route path="/stats" component={About}/>
      	   </Switch>
      	</Router>
    );
  }
}

export default App;
