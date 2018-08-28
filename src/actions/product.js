import * as Types from './../constants/ActionType';

export const addProduct = (product, quantity) => {
	return {
		type: Types.ADD_PRODUCT,
		product,
		quantity
	}
}

export const removeProduct = (product, quantity) => {
	return {
		type: Types.ADD_PRODUCT,
		product,
		quantity
	}
}

// export default { addProduct, removeProduct }