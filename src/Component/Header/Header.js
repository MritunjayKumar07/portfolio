import React from 'react'
import 'boxicons'
import Logo from '../../Assert/logo.png';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='MO-1'>
            <div className='MenuOne'>
                <img style={{ width: "180px", height: "70px", marginLeft: "20px", marginTop: "30px" }} src={Logo} alt="Logo" />
                <ul class="menu-bar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="./about">AboutMe</Link></li>
                    <li><Link to="./contact">ContactMe</Link></li>
                </ul>
            </div>
            <div className='MenuOne-mobile'>
                <img style={{ width: "180px", height: "70px", marginLeft: "20px", marginTop: "16px" }} src={Logo} alt="Logo" />
                <input type="checkbox" id="active" />
                <label for="active" class="menu-btn"><span></span></label>
                <div class="wrapper">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">AboutMe</Link></li>
                    <li><Link to="./contact">ContactMe</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
