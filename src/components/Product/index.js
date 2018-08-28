import React from 'react';

const Product = props => {	

	const { name } = props.product;

	return (
		<div>
			<p>*** Đây là sản phẩm { name } ***</p>
			<hr/>
		</div>
	);
}

export default Product;