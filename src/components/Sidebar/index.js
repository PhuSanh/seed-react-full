import React from "react";

import { t } from "../../utils/translate";
import MainMenu from "../../components/MainMenu";
import {
	WrapSideBar,
	SidebarTitle,
	WrapAvatar,
	UserAvatar,
	Username
} from "./index.style";

const Sidebar = props => {

	const { isShow, username } = props;

	return (
		<WrapSideBar className={isShow ? "show" : "hide"}>
			<SidebarTitle>
				{ t("management_tracking_tool") }
			</SidebarTitle>
			<WrapAvatar>
				<UserAvatar src="/img/profile.png" />
				<Username>
					{ username }
				</Username>
			</WrapAvatar>
			<MainMenu />
		</WrapSideBar>
	)
}

export default Sidebar;
