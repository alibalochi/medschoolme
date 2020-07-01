import React from 'react';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import CustomButton from '../custom-button/custom-button.component'

const Header = () => {
    return (
        <div className="header">
            <Logo className="logo"/>
            <CustomButton className="header-button">Choose Topic</CustomButton>
        </div>
    )

}

export default Header;