import React from "react";
import LockIcon from '@material-ui/icons/LockOutlined';
import { Typography, FormControl, InputLabel, Input } from '@material-ui/core';

import { WrapForm, CompanyLogo, LoginButton, WrapSubmitButton, LoadingSubmit } from "./index.style";
import { t } from "../../utils/translate";

const LoginForm = props => {

	const { onChangeInput, onSubmitLogin, loading } = props;

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
				<WrapSubmitButton>
					<LoginButton
						type="submit"
						fullWidth
						variant="raised"
						color="primary"
						disabled={loading}
					>
						{ t("sign_in") }
					</LoginButton>
					{loading && <LoadingSubmit size={24} />}
				</WrapSubmitButton>
			</form>
		</WrapForm>
	);
}

export default LoginForm;