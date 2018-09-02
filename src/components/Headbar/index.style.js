import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

import {
	mainColor,
	transitionDuration,
	sidebarWidth
} from "../../constants/Styles";

export const WrapHeadbar = styled.div`
	position: fixed;
	top: 0;
	left: ${props => props.isShowSidebar ? sidebarWidth : 0};
	transition: left ${transitionDuration}, width ${transitionDuration};
	width: calc(100% - ${props => props.isShowSidebar ? sidebarWidth : "0px"});
	height: 50px;
	background-color: ${mainColor};
	color: #fff;
	text-align: left;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	&.show-sidebar {
		left: 200;
	}
`;

export const HeadbarLeft = styled.div`
	position: relative;
	float: left;
`;

export const HeadbarPageTitle = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-transform: uppercase;
`;

export const WrapDigitalClock = styled.div`
	position: absolute;
	right: 50px;
	top: 50%;
	transform: translateY(-50%);
`;

export const WrapFullScreenIcon = styled(IconButton)`
	&& {
		width: 50px;
		height: 50px;
		color: #fff;
		float: right;
	}
`;

export const WrapMenuIcon = styled(IconButton)`
	&& {
		width: 50px;
		height: 50px;
		float: left;
		color: #fff;
	}
`;

export const BrandLogo = styled.img`
	height: 50px;
	float: left;
`;