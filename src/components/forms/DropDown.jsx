import React from "react";
import "../../styles/header.scss";


const NavigationLinks = ({ router, status }) => {
    return (
        <ul className="nav-list-pages">
            {router.map((routerItem) => (
                <li className="nav-router-page" key={routerItem.id}>
                    <a href={routerItem["linkRouter"]} className="nav-router-page-color">
                        {routerItem["name-navigation"]}
                    </a>
                </li>
            ))}
            <li className="nav-router-page">
                <div className="nav-router-page-color">
                    {status}
                </div>
            </li>
        </ul>
    );
};

const RouterDropdown = ({ routerDropdown, status }) => {
    return (
        <>
            <div className="menu-dropdown">
                <div className="icon">&#9776;</div>
                <div className="dropdown-content">
                    {routerDropdown.map((routerDropdownItem) => (
                        <a href={routerDropdownItem["linkRouter"]} className="dropdown-content-link">
                            {routerDropdownItem["name-navigation"]}
                        </a>
                    ))}
                    <div className="nav-router-page">
                        <div className="dropdown-content-link">
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const DropDownUser = ({ DropdownUser, showDropdownUser, Status }) => {
    return (
        <div className="dropdown-menu-user">
            <div>{showDropdownUser}</div>
            <ul className="dropdown-menu-content-user">
                {DropdownUser.map((routerDropdownItem) => (
                    <a href={routerDropdownItem["linkRouter"]} className="dropdown-content-link-user">
                        {routerDropdownItem["name-navigation"]}
                    </a>
                ))}
                <div>{Status}</div>
            </ul>
        </div>
    );
};

const DropDownCategory = () => {
    return (
        <>
        </>
    )
}

export {
    NavigationLinks,
    RouterDropdown,
    DropDownUser,
    DropDownCategory
};