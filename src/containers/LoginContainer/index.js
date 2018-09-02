import React, { Component } from "react";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import pick from "lodash/pick";

// import style from "./style.css";
import { t } from "../../utils/translate";
import { login } from "../../actions/auth.action";
import LoginForm from "../../components/LoginForm";

class LoginContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			loading: false
		}
	}

	componentWillMount() {
		const { auth, history } = this.props;
		if(auth.isLoggedIn) {
			history.push("/");
		}
	}

	onChangeInput = (event) => {
		const target = event.target;
		this.setState({
			[target.name]: target.value
		});
	}

	onSubmitLogin = async (event) => {
		event.preventDefault();
		this.setState({
			loading: true
		});
		const user = pick(this.state, ["username", "password"]);
		this.props.login(user);
		// this.props.history.push("/");
	}

	render () {

		const { sidebar } = this.props;
		const { loading } = this.state;

		return (
			<div id="login">
				<LoginForm
					onChangeInput={this.onChangeInput}
					onSubmitLogin={this.onSubmitLogin}
					loading={loading}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		login:(user) => {
			dispatch(login(user));
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));