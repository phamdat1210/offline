import React from 'react';
import { NavLink } from "react-router-dom";
import { PATH } from '../path/paths';
import '../css/header.css';
const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav wapper">
                <ul>
                    <li><NavLink to={PATH.HOME}>Trang chủ</NavLink></li>
                    <li><NavLink to={PATH.BIGSMALL}>Tài xỉu</NavLink></li>
                    <li><NavLink to={PATH.PROBABILITY}>Tool</NavLink></li>
                    <li><NavLink to="#">More</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;