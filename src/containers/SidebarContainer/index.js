import React, { Component } from "react";

import { connect } from "react-redux";

import { toggleSidebar } from "../../actions/sidebar.action";
import Sidebar from "../../components/Sidebar";

class SidebarContainer extends Component {

	render () {

		const { sidebar, auth } = this.props;
		console.log(auth);

		return (
			<Sidebar
				isShow={sidebar.isShow}
				username={auth.user.username}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar,
		auth: state.auth
	}
}

export default connect(mapStateToProps, null)(SidebarContainer);