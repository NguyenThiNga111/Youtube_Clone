import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButton = () => {
    return (
        <nav className="navigation-button">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/youtube">YouTube</Link>
        </nav>
    );
};

export default NavigationButton;
