import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButton = () => {
    return (
        <nav className="nav flex-column p-3">
            <Link to="/" className="nav-link">Trang chủ</Link>
            <Link to="/about" className="nav-link">Giới thiệu</Link>
            <Link to="/youtube" className="nav-link">YouTube</Link>
        </nav>
    );
};

export default NavigationButton;
