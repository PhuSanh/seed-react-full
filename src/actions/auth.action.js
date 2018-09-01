import * as Types from './../constants/ActionType';

export const login = (user) => {
	return {
		type: Types.LOGIN,
		user
	}
}