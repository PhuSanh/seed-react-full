import React from "react";
import LockIcon from '@material-ui/icons/LockOutlined';
import { Typography, FormControl, InputLabel, Input } from '@material-ui/core';

import { WrapForm, CompanyLogo, LoginButton } from "./index.style";
import { t } from "../../utils/translate";

const LoginForm = props => {

	const { onChangeInput, onSubmitLogin } = props;

	return (
		<WrapForm>
			<CompanyLogo>
				<LockIcon />
			</CompanyLogo>
			<Typography variant="headline">{ t("sign_in") }</Typography>
			<form onSubmit={onSubmitLogin}>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="username">{ t("username") }</InputLabel>
					<Input onChange={onChangeInput}
								name="username"
								autoComplete="username"
								autoFocus />
				</FormControl>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="password">{ t("password") }</InputLabel>
					<Input onChange={onChangeInput}
						name="password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
				</FormControl>
				<LoginButton
					type="submit"
					fullWidth
					variant="raised"
					color="primary"
				>
					{ t("sign_in") }
				</LoginButton>
			</form>
		</WrapForm>
	);
}

export default LoginForm;