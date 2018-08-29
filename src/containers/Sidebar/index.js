import React, { Component } from "react";

import { connect } from "react-redux";

import MainMenu from "../../components/MainMenu";
import UserAvatar from "../../components/UserAvatar";
import style from "./style.css";
import { toggleSidebar } from "../../actions/sidebar.action";

class SidebarContainer extends Component {

	onToggleSidebar = () => {
		this.props.toggleSidebar();
	}

	render () {

		const { sidebar } = this.props;

		return (
			<div id="sidebar" className={sidebar.isShow ? "show" : "hide"}>
				<UserAvatar />
				{/* Menu */}
				<MainMenu />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		toggleSidebar:() => {
			dispatch(toggleSidebar());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);