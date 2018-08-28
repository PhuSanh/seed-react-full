import React, { Component, Fragment } from 'react';
import ProductListContainer from './../containers/Product/ProductListContainer';

class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <h2>This is Home page</h2>
                <ProductListContainer />
            </Fragment>
        );
    }

}

export default HomePage;