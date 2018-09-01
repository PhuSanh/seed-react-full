import { combineReducers } from 'redux';
import products from './products';
import sidebar from "./sidebar.reducer";
import auth from "./auth.reducer";

const appReducers = combineReducers({
		products, // products: products
		sidebar,
		auth
});

export default appReducers;