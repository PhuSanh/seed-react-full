import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListContainer from './containers/Product/ProductListContainer';
import routes from './routes';
import MainMenu from './components/Menu/MainMenu';

class App extends Component {

	showPageContent = (routes) => {
		var result = null;

		if(routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={ index }
						path={ route.path }
						exact={ route.exact }
						component={ route.main }
					/>
				);
			})
		}

		return result;
	}

	render() {
		return (
			<Router>
				<div className="App"> {/* Can use Fragment */}

					{/* Menu */}
					<MainMenu />

					{/* Content */}
					<h1>Xin chao</h1>
					<Switch>
						{ this.showPageContent(routes) }
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
