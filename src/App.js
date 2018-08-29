import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListContainer from './containers/Product/ProductListContainer';
import routes from './routes';

import SidebarContainer from "./containers/Sidebar";
import HeadbarContainer from "./containers/Headbar";
import { connect } from "react-redux";

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
		const { sidebar } = this.props;

		return (
			<Router>
				<div className={"App " + (sidebar.isShow ? "fixed-sidebar" : "")}> {/* Can use Fragment */}

					<HeadbarContainer />
					<SidebarContainer />

					{/* Content */}
					<div id="main-app">
						<h1>Xin chao</h1>
						<Switch>
							{ this.showPageContent(routes) }
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar
	}
}

export default connect(mapStateToProps, null)(App);
