import React from 'react';
import { Route, Link } from 'react-router-dom';

import style from "./style.css";

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

const MainMenu = props => {

	return(
			<div id="main-menu">
					<ul>
							<MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
							<MenuLink label="Liên hệ" to="/contact" />
					</ul>
					{/* This is product list { props.children } */}
			</div>
	);

}

export default MainMenu;