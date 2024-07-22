import { Link } from "react-router-dom";
import React from 'react';
import PropTypes from "prop-types";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const LogoPage = ({ image }) => {
  const cld = new Cloudinary({ cloud: { cloudName: process.env.REACT_APP_CLOUDINARY_NAME } });
  const img = cld
    .image(image)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(90).height(90))
  return (
    <div className="page-logo">
      <Link to="/">
        <AdvancedImage cldImg={img} className="page-image-logo" />
      </Link>
    </div>
  );
};

LogoPage.propTypes = {
  image: PropTypes.string.isRequired,
}


export default LogoPage;
