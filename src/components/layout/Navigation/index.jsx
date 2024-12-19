import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import NavigatePage from "../../../mock/test.json";
import Logout from "../../../pages/Auth/Components/Logout";
const NavigationLinks = ({ status }) => {
  return (
    <div className="flex items-center	gap-2">
      {NavigatePage.router.map((param, index) => (
        <div className="hover:text-blue-300 transition duration-300">
          <Link to={param.linkRouter} key={index}>
            <h1>{param.nameNavigation}</h1>
          </Link>
        </div>
      ))}
      <Link to={"/profile"}>{status}</Link>
      <Logout />
    </div>
  );
};

NavigationLinks.propTypes = {
  status: PropTypes.string,
  router: PropTypes.array,
};

export default NavigationLinks;
