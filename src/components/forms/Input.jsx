import React from "react";

import PropTypes from 'prop-types'

const Input = ({
    type,
    placeholder,
    onChange,
    onClick,
    className,
    value,
    name,
    onSubmit,
    required,
    defaultValue,
    checked }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onSubmit={onSubmit}
            onClick={onClick}
            className={className}
            value={value}
            name={name}
            required={required}
            defaultValue={defaultValue}
            checked={checked}
        />
    )
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onsubmit: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    checked: PropTypes.bool
};

export default Input;