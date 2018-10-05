import React from 'react';
import './Footer.css';
import myPicture from '../../Images/myPic.jpg';
// import Card from '../Card/Card';

const Footer = () =>{
    return(
        <div className="useLess">
        <div className="footer-box">
        <img className="myPic" src={myPicture} width="20%" height="auto" alt="" />
            <p className="footer-text"style={{textAlign: '-webkit-center', fontSize:'22px',color:'white'}}>
              &copy;2018 Build By Anit Kumar
            </p>
        </div>
      </div>
    );
}
export default Footer;