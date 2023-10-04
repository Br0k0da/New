import React from 'react';
import clasess from './header.module.css';
import logo from './/../../img/img1.png';

const Header = () => {
    return (
        <header className={clasess.header}>
            <img src={logo}></img>
        </header>
    );
}

export default Header;