import { combineReducers } from 'redux';
import products from './products';
import sidebar from "./sidebar.reducer";

const appReducers = combineReducers({
		products, // products: products
		sidebar
});

export default appReducers;