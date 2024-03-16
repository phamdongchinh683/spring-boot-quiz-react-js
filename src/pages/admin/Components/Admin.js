import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import iconAdmin from "../../../assets/icon/admin.svg";
import "../../Auth/Components/Login/index.scss";

const Admin = ({ LinkTo, TextStatus }) => {
    return (
        <Link to={LinkTo}>
            <div className='container-login-show'>
                <div className='my-out-img'>
                    <img src={iconAdmin} alt="Guest" className='image-guest' />
                </div>
                <div className='guest-text-status'>{TextStatus}</div>
            </div>
        </Link>
    );
};

Admin.propTypes = {
    LinkTo: PropTypes.string,
    TextStatus: PropTypes.string
};

export default Admin;