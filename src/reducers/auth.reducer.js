import * as Types from './../constants/ActionType';

const user = localStorage.getItem("user");

let initialState = {
	isLoggedIn: user !== null,
	user: {
		id: 1,
		username: "",
		role_id: 1
	}
}; // String, Array, Object,...

const auth = (state = initialState, action) => {

    switch(action.type) {
			case Types.LOGIN:
				state.user.username = action.user.username;
				localStorage.setItem("user", JSON.stringify(state.user));
				return {
					...state,
					isLoggedIn: true
				};
			default:
					return state; // copy new array and return it
    }

}

export default auth;