import React, { useState } from 'react';
import ArrowLeft from '../../images/small.jpg'; // Icon mũi tên trái
import ArrowRight from '../../images/big.jpg'; // Icon mũi tên phải
import '../styles/style_youtube/Navbar.css'; // Import CSS file if needed

const Navbar = () => {
    const navItems = [
        "Tất cả",
        "Đề xuất mới",
        "Âm nhạc",
        "Trò chơi",
        "Trực tiếp",
        "Tin tức",
        "Danh sách kết hợp",
        "Hoạt hình",
        "Điểm đến du lịch",
        "Nghệ thuật thị giác",
        "Đọc rap",
        "Mới tải lên gần đây",
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const itemsPerPage = 10;

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
    };
    
    const handleNextClick = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 5, navItems.length - 5));
    };
    
    

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className="navbar-container">
            {startIndex > 0 && (
                <button className="nav-arrow left" onClick={handlePrevClick}>
                    <img src={ArrowLeft} alt="Previous" />
                </button>
            )}
            <ul className="navbar">
                {navItems.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
                    <li
                        key={index}
                        className={`navbar-item ${selectedItem === index + startIndex ? 'selected' : ''}`}
                        onClick={() => handleItemClick(index + startIndex)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {startIndex + itemsPerPage < navItems.length && (
                <button className="nav-arrow right" onClick={handleNextClick}>
                    <img src={ArrowRight} alt="Next" />
                </button>
            )}
        </div>
    );
};

export default Navbar;
