import React from "react";

export default function Input({ type, placeholder, onChange, onClick, className, value, name, onSubmit }) {
    return (
        <>
            <input type={type} placeholder={placeholder}
                onChange={onChange}
                onSubmit={onSubmit}
                onClick={onClick}
                className={className}
                value={value}
                name={name}
                required />
        </>
    )
}


