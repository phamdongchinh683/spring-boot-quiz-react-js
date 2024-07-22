import React from 'react';

const SelectDropDown = ({ info, options, className, defaultValue, onChange }) => {
    return (
        <div className="form-group-info">
            <span className="profile-info-text">{info}</span>
            <select className={className} onChange={onChange} defaultValue={defaultValue}>
                {options.map((province) => (
                    <option key={province.province_id} value={province.province_name}>
                        {province.province_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropDown;
