import React from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

import DigitalClock from "../../components/DigitalClock";
import { t } from "../../utils/translate";
import {
	WrapHeadbar,
	HeadbarLeft,
	HeadbarPageTitle,
	WrapDigitalClock,
	WrapFullScreenIcon,
	WrapMenuIcon,
	BrandLogo
} from "./index.style";

const Headbar = props => {

	const { isShowSidebar, onToggleSidebar, onFullScreen } = props;

	return (
		<WrapHeadbar id="headbar" isShowSidebar={isShowSidebar}>
			<HeadbarLeft>
				<WrapMenuIcon onClick={onToggleSidebar} aria-label="Menu">
					<MenuIcon />
				</WrapMenuIcon>

				<BrandLogo src="img/logo-vinamilk.png" />
				{/* <p className="tool-title">{ t("management_tracking_tool") }</p> */}
			</HeadbarLeft>
			<HeadbarPageTitle>
				{ t("management_line") }
			</HeadbarPageTitle>
			<WrapDigitalClock>
				<DigitalClock />
			</WrapDigitalClock>
			<WrapFullScreenIcon onClick={onFullScreen} aria-label="Menu">
				<FullscreenIcon />
			</WrapFullScreenIcon>
		</WrapHeadbar>
	);
}

export default Headbar;