import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const IconFooter = ({ icons }) => {
    return (
        <div className="container-icon-footer">
            {icons.map((iconFooter) => (
                <Link to={iconFooter.iconPath} key={iconFooter.id}>
                    <img src={iconFooter.iconSrc} alt={iconFooter.iconAlt} />
                </Link>
            ))}
        </div>
    );
};

IconFooter.propTypes = {
    icons: PropTypes.any
}

export default IconFooter;