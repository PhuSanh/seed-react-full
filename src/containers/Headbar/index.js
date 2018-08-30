import React, { Component } from "react";

import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import screenfull from "screenfull";

import style from "./style.css";
import DigitalClock from "../../components/DigitalClock";
import { toggleSidebar } from "../../actions/sidebar.action";
import { t } from "../../utils/translate";

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
			<div id="headbar">
				<div className="headbar-left">
					<IconButton onClick={this.onToggleSidebar} className="icon-menu" color="primary" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<img className="brand-logo" src="img/logo-vinamilk.png" />
					<p className="tool-title">{ t("management_tracking_tool") }</p>
				</div>
				<div className="page-title">
					{ t("management_line") }
				</div>
				<div className="digital-clock">
					<DigitalClock />
				</div>
				<IconButton onClick={this.fullScreen} className="icon-fullscreen" color="primary" aria-label="Menu">
					<FullscreenIcon />
				</IconButton>
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