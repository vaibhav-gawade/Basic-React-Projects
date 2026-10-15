import React from 'react';
import LogoImage from '../assets/Logo.png';

function Logo({width="100px"}) {
    return (
        <img src={LogoImage} alt="logo" width={width}></img>
    )
}

export default Logo;