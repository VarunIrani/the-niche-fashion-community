import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import ROUTES from "./routes";
import NicheNavbar from "./components/NicheNavbar";

class App extends Component {
	getRoutes(routes) {
		return routes.map(
			(prop, key) =>
				prop.path === '/' ? (
					<Route exact path={prop.path} key={key} component={prop.component}/>
				) : (
					<Route path={prop.path} key={key} component={prop.component} id={key}/>
				)
		);
	}

	render() {
		return (
			<Router basename='/'>
				<NicheNavbar/>
				<Toolbar/>
				<Switch>{this.getRoutes(ROUTES)}</Switch>
			</Router>
		);
	}
}

export default App;