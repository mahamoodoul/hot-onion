import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="container">
           
            <div style={{marginBottom : '0px !important'}} className="d-flex bd-highlight  headerstyle"  >
                <div className="p-2 bd-highlight">

                    <a href="mainShop"><img className="logoPosition" src={logo} alt="logo"/></a>
                        
                </div>
               
                <div className="ml-auto p-2 bd-highlight">
                      
                  <button className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
                <div className="p-2 bd-highlight">
                    <button className="loginBtn">Login</button>
                </div>
                <div className="p-2 bd-highlight">
                    <button className="signUpBtn">Sign Up</button>
                </div>
            </div>
          
        </div>
    );
};

export default Header;