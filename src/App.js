import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ProductListContainer from './containers/Product/ProductListContainer';
import routes from './routes';

import SidebarContainer from "./containers/SidebarContainer";
import HeadbarContainer from "./containers/HeadbarContainer";
import { connect } from "react-redux";
import LoginPage from './pages/LoginPage';

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
		const { sidebar, auth, location } = this.props;
		if(!auth.isLoggedIn && location.pathname !== "/login") {
			return (<Redirect to="/login" />)
		}

		return (
			<Fragment>
				{ (location.pathname === "/login")
					?	(<Route path="/login" component={() => <LoginPage />} />)
					: (	
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
					)
				}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar,
		auth: state.auth
	}
}

export default withRouter(connect(mapStateToProps, null)(App));
