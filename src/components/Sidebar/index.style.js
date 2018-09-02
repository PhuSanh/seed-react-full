import styled from 'styled-components';

import {
	mainColor,
	transitionDuration,
	sidebarWidth
} from "../../constants/Styles";

export const WrapSideBar = styled.div`
	width: ${sidebarWidth};
	position: fixed;
	left: -${sidebarWidth};
	top: 0;
	height: 100%;
	background-color: #212121;
	color: #fff;
	transition: all ${transitionDuration};
	overflow-y: scroll;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
	&::-webkit-scrollbar {
		display: none;
	}
	&.show {
		left: 0;
	}
`;

export const SidebarTitle = styled.div`
	background-color: ${mainColor};
	height: 50px;
	text-align: center;
	line-height: 50px;
`;

export const WrapAvatar = styled.div`
	padding: 15px 0px 20px 15px;
	background-image: url("/img/material_bg.png");
	height: 50px;
`;

export const UserAvatar = styled.img`
	color: rgb(255, 255, 255);
	background-color: rgb(188, 188, 188);
	user-select: none;
	display: block;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	border-radius: 50%;
	height: 50px;
	width: 50px;
	float: left;
	margin-right: 15px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 8px;
`;

export const Username = styled.span`
	padding-top: 12px;
	display: block;
	color: white;
	font-weight: 300;
	text-shadow: rgb(68, 68, 68) 1px 1px;
`;