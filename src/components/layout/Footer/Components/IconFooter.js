import React from "react";
import { Link } from "react-router-dom";

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


export default IconFooter;