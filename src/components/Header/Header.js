import React from 'react';
import logo from '../../../src/logo.svg';
import './Header.css';

const Header = () =>{
    return(
        <div className="header-container">
             <img src={logo} className="App-logo" alt="logo" />
             <p>Front End Challenge</p>
        </div>
    )
}
export default Header;

