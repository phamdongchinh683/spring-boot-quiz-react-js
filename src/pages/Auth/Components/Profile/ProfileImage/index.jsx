import React from 'react';
import PropTypes from "prop-types";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

import "./index.scss";
const profileImage = ({ avatar }) => {
    const cld = new Cloudinary({ cloud: { cloudName: process.env.REACT_APP_CLOUDINARY_NAME } });
    const img = cld
        .image(avatar)
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(175).height(175))

    return (<AdvancedImage cldImg={img} className="profile-image" />);
}

profileImage.propTypes = {
    avatar: PropTypes.string.isRequired
};

export default profileImage;