// SearchBar.js
import React, { useState, forwardRef } from 'react';
import '../App.css';
import Lup from "../images/4.jpg";
import board from "../images/5.jpg";

const SearchBar = forwardRef(({ onSearch }, ref) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (typeof onSearch === 'function') {
            onSearch(query);
        } else {
            console.error('onSearch is not a function');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <div className="search-input-wrapper">
                <input 
                    type="text" 
                    value={query} 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyDown} 
                    placeholder="Tìm kiếm"
                    ref={ref}
                />
                <span className="search-icon"><img src={board} alt="board"/></span>
            </div>
            <button onClick={handleSearch}>
                <span className="button-icon"><img src={Lup} alt="lup"/></span>
            </button>
        </div>
    );
});

export default SearchBar;
