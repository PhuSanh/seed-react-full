import * as Types from './../constants/ActionType';

var initialState = {
	isShow: false
}; // String, Array, Object,...

const sidebar = (state = initialState, action) => {

    switch(action.type) {
				case Types.TOGGLE_SIDEBAR:
					return {
						...state,
						isShow: !state.isShow
					}; // or [...state, action.product]
        default:
            return state; // copy new array and return it
    }

}

export default sidebar;