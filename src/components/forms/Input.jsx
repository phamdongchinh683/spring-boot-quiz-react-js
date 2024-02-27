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
    onSubmit }) => {
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
                required />
        </>
    )
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    required: PropTypes.bool
}

export default Input;