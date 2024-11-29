import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import icon from "../../../../assets/icon/guest.svg";

const Guest = ({ TextStatus, LinkTo }) => {
  return (
    <Link to={LinkTo}>
      <div className="flex">
        <div className="my-out-img">
          <img src={icon} alt="Guest" className="image-guest" />
        </div>
        <div className="guest-text-status">{TextStatus}</div>
      </div>
    </Link>
  );
};

Guest.propTypes = {
  TextStatus: PropTypes.string,
  LinkTo: PropTypes.string,
};

export default Guest;
