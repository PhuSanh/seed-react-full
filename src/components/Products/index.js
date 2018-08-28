import React from 'react';

const ProductList = props => {	

	const { onAddProduct } = props;

	return (
		<section>
			<h3>Danh sách sản phẩm</h3>
			<div className="row">
				{ props.children }
			</div>
			<button onClick={onAddProduct}>Thêm sản phẩm</button>
		</section>
	);
}

export default ProductList;