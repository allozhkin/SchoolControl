import React, { useState } from 'react';

const CheckboxWithLabel = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={handleCheckboxChange} 
            />
            {label}
        </label>
    );
};

export default CheckboxWithLabel;