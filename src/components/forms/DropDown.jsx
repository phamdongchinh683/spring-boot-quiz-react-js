import React from 'react';

const SelectDropDown = ({ info, options, className, defaultValue, onChange }) => {
    return (
        <div className="form-group-info">
            <span className="profile-info-text">{info}</span>
            <select className={className} onChange={onChange} defaultValue={defaultValue}>
                {options.map((province) => (
                    <option key={province.code} value={province.name}>
                        {province.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropDown;
