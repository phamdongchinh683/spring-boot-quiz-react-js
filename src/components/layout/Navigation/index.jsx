import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import NavigatePage from "../../../mock/test.json";
const NavigationLinks = ({ status }) => {
  return (
    <>
      <div className="flex">
        {NavigatePage.router.map((param, index) => (
          <div className="hover:text-blue-300 transition duration-300">
            <Link to={param.linkRouter} key={index}>
              <h1>{param.nameNavigation}</h1>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/profile"}>{status}</Link>
    </>
  );
};

NavigationLinks.propTypes = {
  status: PropTypes.string,
  router: PropTypes.array,
};

export default NavigationLinks;
