import PropTypes from "prop-types";
import React from "react";

const InputInfo = ({
    info,
    defaultValue,
    placeholder,
    disabled,
    type,
    onChange,
    min,
    max,
    value,
    key,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                className={`w-full p-2 rounded-md border focus:outline-none`}
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
