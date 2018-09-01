import styled from 'styled-components';
import { Paper, Avatar, Button } from "@material-ui/core";

export const WrapForm = styled(Paper)`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 400px;
	width: 100%;
	margin: auto;
	display: block;
	text-align: center;
	padding: 15px 25px;
`;

export const CompanyLogo = styled(Avatar)`
	margin: auto;
	background-color: #DE0E53 !important;
	margin-bottom: 10px;
`;

export const LoginButton = styled(Button)`
	&& {
		margin-top: 20px;
	}
`;