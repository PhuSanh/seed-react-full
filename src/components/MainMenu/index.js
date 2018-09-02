import React, { Component } from 'react';

import { ListMainMenu, MenuLi, MenuNavLink, ParentSubMenu, ListSubMenu, SubMenuArrow } from "./index.style";

const SubMenu = ({ subs }) => {
	return (
		<ListSubMenu className="sub-menu">
			{ subs.map(sub => {
				return (
					<MenuLink
						key={sub.label}
						label={sub.label}
						to={sub.to}
						activeOnlyWhenExact={sub.activeOnlyWhenExact ? true : false} />
				);
			})}
		</ListSubMenu>
	);
}

const MenuLink = ({ label, to, subs, parent, activeParent, onToggleSubMenu, activeOnlyWhenExact = false }) => {

	const active = (parent && activeParent && parent === activeParent) ? "active" : "";
	let menu;
	if(to) {
		menu = (<MenuNavLink to={to}>{ label }</MenuNavLink>);
	} else {
		menu = (<ParentSubMenu onClick={() => onToggleSubMenu(parent)}>
							{ label }
							<SubMenuArrow className="sub-menu-arrow" />
						</ParentSubMenu>);
	}

	return (
		<MenuLi className={`my-li ${active}`}>
				{ menu }
				{ (subs && subs.length > 0) ? <SubMenu subs={subs} /> : null }
		</MenuLi>
	);
}

const menus = [
	{ label: "Home", to: "/",  activeOnlyWhenExact: true },
	{ label: "Master Data", parent: "master_data", subs: [
		{ label: "User", to: "/user" },
		{ label: "Role", to: "/user" },
		{ label: "Product", to: "/user" }
	] },
	{ label: "Line chờ", parent: "wait_line", subs: [
		{ label: "Line chờ 1", to: "/user" },
		{ label: "Line chờ 2", to: "/user" }
	] },
	{ label: "Line xuất hàng", to: "/" },
	{ label: "Import dữ liệu", to: "/contact" },
]

class MainMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeParent: ""
		}
	}

	onToggleSubMenu = (value) => {
		this.setState({
			activeParent: this.state.activeParent !== value ? value : "" 
		})
	}

	render() {
		return(
			<ListMainMenu id="main-menu">
				{ menus.map(menu => {
						return (
							<MenuLink
								key={menu.label}
								label={menu.label}
								to={menu.to}
								subs={menu.subs}
								parent={menu.parent}
								activeParent={this.state.activeParent}
								onToggleSubMenu={this.onToggleSubMenu}
								activeOnlyWhenExact={menu.activeOnlyWhenExact ? true : false} />
						)
				})}
				{/* This is product list { props.children } */}
			</ListMainMenu>
		);
	}
}

export default MainMenu;