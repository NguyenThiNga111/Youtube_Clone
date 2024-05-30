import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSearchHistory, updateSearchHistory } from "../../Redux/actions";
import "../styles/style_youtube/SearchBar.css";
import Lup from "../../images/Lup.jpg";
import board from "../../images/board.jpg";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const searchHistory = useSelector((state) => state.searchHistory.history);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      setShowHistory(true);
    }
  };

  const handleInputClick = () => {
    setShowHistory(true);
  };

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(query);
      dispatch(addToSearchHistory(query));
      setShowHistory(false);
    } else {
      console.error("onSearch is not a function");
    }
  };

  const handleInputBlur = () => {
    setShowHistory(false);
  };

  const handleHistoryItemClick = (keyword) => {
    setQuery(keyword);
    setShowHistory(false);
    if (typeof onSearch === "function") {
      onSearch(keyword);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setShowHistory(false);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          onClick={handleInputClick}
          placeholder="Search"
        />
        <span className="search-icon">
          <img src={board} alt="board" />
        </span>
      </div>
      {showHistory && (
        <div className="search-history">
          {searchHistory.slice(0, 10).map((item, index) => (
            <div
              className="search-history-item"
              key={index}
              onClick={() => handleHistoryItemClick(item)}
            >
              <img src={Lup} alt="lup" className="history-icon" /> {/* Biểu tượng lup */}
              <p>{item}</p>
            </div>
          ))}
          <div className="search-history-text">
            <p>Báo cáo đề xuất tìm kiếm không phù hợp</p>
          </div>
        </div>
      )}
      <button onClick={handleSearch}>
        <span className="button-icon">
          <img src={Lup} alt="lup" />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
