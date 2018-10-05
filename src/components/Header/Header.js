import React from 'react';
// Importing css file and images
import logo from '../../../src/logo.svg';
import './Header.css';

const Header = () =>{
    return(
        <div className="header-container">
             <img src={logo} className="App-logo" alt="logo" />
             <p>Anit Kumar's Website</p>
        </div>
    )
}
export default Header;

