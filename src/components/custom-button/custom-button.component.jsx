import React from 'react';

import './custom-button-styles.scss';

const CustomButton = ({children, hidden, ...otherProps}) => {
    return (
        <button className={`${hidden? 'custom-button' : ''}custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;