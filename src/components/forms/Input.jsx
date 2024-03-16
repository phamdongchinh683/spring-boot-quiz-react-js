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
    required }) => {
    return (
        <>
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
            />
        </>
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
    required: PropTypes.bool
};

export default Input;