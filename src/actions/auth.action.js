import * as Types from './../constants/ActionType';

export const login = (user) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(setUser(user))
		}, 1500);
	}
}

export const setUser = (user) => {
	return {
		type: Types.LOGIN,
		user
	}
}