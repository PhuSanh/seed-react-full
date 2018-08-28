import * as Types from './../constants/ActionType';

var initialState = [
    {
        id: 1,
        name: 'samsung s7'
    },
    {
        id: 2,
        name: 'iphone 8'
		},
		{
			id: 3,
			name: 'sony M'
	}
]; // String, Array, Object,...

const products = (state = initialState, action) => {

    switch(action.type) {
				case Types.ADD_PRODUCT:
					state.push(action.product);
					return [...state] // or [...state, action.product]
        default:
            return [...state]; // copy new array and return it
    }

}

export default products;