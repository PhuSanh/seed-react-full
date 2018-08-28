import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../../components/Products';
import Product from './../../components/Product';
import PropTypes from "prop-types";
import { addProduct, removeProduct } from "../../actions/product";

class ProductListContainer extends Component {

		onAddProduct = () => {
			console.log("added product");
			const product = {
				id: 4,
				name: "Nokia mới"
			}
			this.props.addProduct(product);
		}

    render() {

			const { products } = this.props;

        return(
            <ProductList onAddProduct={this.onAddProduct} >
							{ this.showProducts(products) }
						</ProductList>
        );
		};
		
		showProducts = (products) => {
			let result = null;
			if(products.length > 0) {
				result = products.map((product, index) => {
					return (
						<Product key={index}
										product={product}/>
					);
				})
			}
			return result;
		}
}

ProductListContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		addProduct: (product) => {
			dispatch(addProduct(product, 1));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);