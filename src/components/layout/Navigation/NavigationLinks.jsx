import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.scss";
import PropTypes from 'prop-types';

// Navigation main links
const NavigationLinks = ({ router, status, loginAdmin }) => {
    return (
        <ul className="nav-list-pages">
            {router.map((routerItem) => (
                <li className="nav-router-page" key={routerItem.id}>
                    <Link to={routerItem.linkRouter} className="nav-router-page-color">
                        {routerItem["name-navigation"]}
                    </Link>
                </li>
            ))}
            <li className="nav-router-page">
                <div className="nav-router-page-color">
                    {status}
                </div>
            </li>
            <li className="nav-router-page">
                <div className="nav-router-page-color">
                    {loginAdmin}
                </div>
            </li>
        </ul>
    );
};


NavigationLinks.propTypes = {
    router: PropTypes.array,
    status: PropTypes.object,
    loginAdmin: PropTypes.object
};


export default NavigationLinks;
