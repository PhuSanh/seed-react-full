import React, { Component } from "react";

import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"

import style from "./style.css";
import DigitalClock from "../../components/DigitalClock";
import { toggleSidebar } from "../../actions/sidebar";

class HeadbarContainer extends Component {

	onToggleSidebar = () => {
		this.props.toggleSidebar();
	}

	render () {

		const { sidebar } = this.props;

		return (
			<div id="headbar">
				<div className="headbar-left">
					<IconButton onClick={this.onToggleSidebar} className="icon-menu" color="primary" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<img className="brand-logo" src="img/logo-vinamilk.png" />
					<p className="tool-title">Tool quản lý / tracking</p>
				</div>
				<div className="page-title">
					Trang quản lý line
				</div>
				<div className="digital-clock">
					<DigitalClock />
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		toggleSidebar:() => {
			dispatch(toggleSidebar());
		}
	}
}

export default connect(null, mapDispatchToProps)(HeadbarContainer);