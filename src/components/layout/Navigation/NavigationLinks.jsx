import React from "react";
import { Link } from "react-router-dom";

import "../Header/header.scss";

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

const NavigationLinksMedia = ({ routerDropdown, status, loginAdmin }) => {
    return (
        <>
            <div className="menu-dropdown">
                <div className="icon">&#9776;</div>
                <div className="dropdown-content">
                    {routerDropdown.map((routerDropdownItem) => (
                        <Link to={routerDropdownItem.linkRouter} className="dropdown-content-link" key={routerDropdownItem.id}>
                            {routerDropdownItem["name-navigation"]}
                        </Link>
                    ))}
                    <div className="nav-router-page" key="status">
                        <div className="dropdown-content-link">
                            {status}
                        </div>
                    </div>
                    <div className="nav-router-page" key="loginAdmin">
                        <div className="dropdown-content-link">
                            {loginAdmin}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const NavigationOfUser = ({ NavigationUser, showDropdownUser, Status }) => {
    return (
        <div className="dropdown-menu-user">
            <div>{showDropdownUser}</div>
            <ul className="dropdown-menu-content-user">
                {NavigationUser.map((NavigationUserItem) => (
                    <Link to={NavigationUserItem.linkRouter} className="dropdown-content-link-user" key={NavigationUserItem.id}>
                        {NavigationUserItem["name-navigation"]}
                    </Link>
                ))}
                <div key="status">{Status}</div>
            </ul>
        </div>
    );
};

export {
    NavigationLinks,
    NavigationOfUser,
    NavigationLinksMedia
};
