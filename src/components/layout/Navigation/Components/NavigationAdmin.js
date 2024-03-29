import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../Header/index.scss";

const NavigationAdmin = ({ routerAdmin }) => {
  return (
    <div className="admin-navigation">
      <ul className="admin-nav-container">
        {routerAdmin.map((listRouter) => {
          <li className="admin-nav-item" key={listRouter.id}>
            <Link to={listRouter.NavigationAdmin}>
              {listRouter["name-navigation"]}
            </Link>
          </li>;
        })}
        ;
      </ul>
    </div>
  );
};

NavigationAdmin.propTypes = {
  routerAdmin: PropTypes.object,
};
export default NavigationAdmin;
