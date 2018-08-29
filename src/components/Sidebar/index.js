import React, { Component } from "react";

import MainMenu from "./../Menu/MainMenu";
import style from "./style.css";

class Sidebar extends Component {
	render () {
		return (
			<div id="sidebar">
				This is sidebar
				{/* Menu */}
				<MainMenu />
			</div>
		)
	}
}

export default Sidebar;