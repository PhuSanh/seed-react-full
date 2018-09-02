import React, { Component } from "react";

import { connect } from "react-redux";
import screenfull from "screenfull";

import { toggleSidebar } from "../../actions/sidebar.action";
import Headbar from "../../components/Headbar";

class HeadbarContainer extends Component {

	onToggleSidebar = () => {
		this.props.toggleSidebar();
	}

	fullScreen = () => {
		screenfull.toggle();
	}

	render () {

		const { sidebar } = this.props;

		return (
			<Headbar
				isShowSidebar={sidebar.isShow}
				onToggleSidebar={this.onToggleSidebar}
				onFullScreen={this.fullScreen}
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadbarContainer);