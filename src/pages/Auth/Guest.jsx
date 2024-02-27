import React from 'react';
import icon from "../../assets/icon/guest.png";
import "../Auth/login/login.scss";
import { Link } from 'react-router-dom';

const Guest = ({ TextStatus, LinkTo }) => {
    return (
        <Link to={LinkTo}>
            <div className='container-login-show'>
                <div className='my-out-img'>
                    <img src={icon} alt="Guest" className='image-guest' />
                </div>
                <div className='guest-text-status'>{TextStatus}</div>
            </div>
        </Link>
    );
};

export default Guest;
