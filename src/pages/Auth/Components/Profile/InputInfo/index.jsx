import PropTypes from "prop-types";
import React from "react";

const InputInfo = ({ info, defaultValue, placeholder, disabled, type, onChange, min, max, value, key }) => {
    return (
        <div className="form-group-info mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {info}:
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                min={min}
                max={max}
                key={key}
                className={`profile-info-input w-full p-2 rounded-md border focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${disabled
                        ? "bg-gray-100 cursor-not-allowed"
                        : "bg-white border-gray-300 hover:border-blue-500"
                    }`}
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
    placeholder: PropTypes.string,
};

export default InputInfo;
