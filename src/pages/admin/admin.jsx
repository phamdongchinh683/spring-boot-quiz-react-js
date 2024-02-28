import React from "react";
import { Link } from "react-router-dom";
import iconAdmin from "../../assets/icon/admin.svg";
import "../Auth/login/login.scss";
import PropTypes from 'prop-types';

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
}

export default Admin;