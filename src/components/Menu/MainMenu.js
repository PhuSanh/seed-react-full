import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact = false }) => {
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active' : '';
            return(
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">
                        { label }
                    </Link>
                </li>
            );
        }} />
    );
}

class MainMenu extends Component {

    render() {
        return(
            <div>
                <ul>
                    <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
                    <MenuLink label="Liên hệ" to="/contact" />
                </ul>
                This is product list { this.props.children }
            </div>
        );
    };

}

export default MainMenu;