import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const FooterMenus = ({ router }) => {
    return (
        <>
            <div className="container-footer-menu">
                {router.map((routerFooter) => (
                    <Link to={routerFooter.linkRouter} className="footer-menu" key={routerFooter.id}>
                        {routerFooter["name-navigation"]}
                    </Link>
                ))}
            </div>
        </>
    );
};

FooterMenus.propTypes = {
    router: PropTypes.any
}

export default FooterMenus;