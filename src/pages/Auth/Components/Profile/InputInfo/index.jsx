import React from "react";
import PropTypes from "prop-types";

const InputInfo = ({ info, defaultValue, placeholder, disabled, type, onChange, min, max, value, key }) => {
    return (
        <div className="form-group-info">
            <span className="profile-info-text">{info}</span>
            <input
                type={type}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="profile-info-input"
                min={min}
                max={max}
                key={key}
            />
        </div>
    );
};

InputInfo.propTypes = {
    info: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    key: PropTypes.string,
    placeholder: PropTypes.string
};

export default InputInfo;
