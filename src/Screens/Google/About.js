import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/style_google/about.css";
import logo from "../../images/logo_google.jpg";
import Is from "../../images/Lup.jpg";
import Iss from "../../images/board.jpg";
import Isss from "../../images/search.jpg";
import Issss from "../../images/voice.jpg";
import NavigationButton from "../../components/NavigationButton";
import SearchBar from "../Youtube/SearchBar";

function handleLinkClick() {
  console.log("Đã click vào liên kết");
}

function handleButtonClick() {
  console.log("Đã click vào nút");
}

function App() {
  const searchHistory = useSelector((state) => state.searchHistory.history);
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  const handleInputClick = () => {
    setShowSearchHistory(true);
  };

  const handleClickOutside = (event) => {
    if (event.target.id !== "searchHistory") {
      setShowSearchHistory(false);
    }
  };

  return (
    <div className="App" onClick={handleClickOutside}>
      <NavigationButton />
      <header>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleLinkClick}>
              Gmail
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleLinkClick}>
              Hình ảnh
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleLinkClick}>
              <img
                src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
                alt="Icon"
              />
            </a>
          </li>
          <li className="nav-item">
            <button
              className="nav-link-button"
              onClick={handleButtonClick}
            >
              Đăng nhập
            </button>
          </li>
        </ul>
      </header>
      <main>
        <body>
          <div>
            <img className="logo" src={logo} alt="Google Logo" />
          </div>
          <div className="search-box">
            <span class="icon-left">
              <img src={Is} className="iconsearch" />
            </span>
            <span className="icon-right">
              <img src={Iss} className="iconsearch-right" />
              <img src={Isss} className="iconsearch-right" />
              <img src={Issss} className="iconsearch-right" />
            </span>
            <input
              type="search"
              id="searchHistory"
              // value={searchHistory}
              onClick={handleInputClick}
            />
          </div>
          {showSearchHistory && (
            <ul className="search-history-list">
              {searchHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <div className="grid-container">
            <div className="column">
              <div className="column1">
                <button className="search-button" onClick={handleButtonClick}>
                  Tìm trên Google
                </button>
              </div>
            </div>
            <div className="column">
              <button className="search-button" onClick={handleButtonClick}>
                Xem trang đầu tiên tìm được
              </button>
            </div>
          </div>

          <div className="choose-lau">
            <p>
              Google có các thứ tiếng:
              <a href="#" onClick={handleLinkClick}>
                English
              </a>
              <a href="#" onClick={handleLinkClick}>
                Francais
              </a>
              <a href="#" onClick={handleLinkClick}>
                繁體中文
              </a>
            </p>
          </div>
        </body>
      </main>
      <footer>
        <div className="footer-top">
          <p>Việt Nam</p>
          <hr width="100%" />
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <a href="#" onClick={handleLinkClick}>
              Giới thiệu
            </a>
            <a href="#" onClick={handleLinkClick}>
              Quảng cáo
            </a>
            <a href="#" onClick={handleLinkClick}>
              Doanh nghiệp
            </a>
            <a href="#" onClick={handleLinkClick}>
              Các hoạt động của tìm kiếm
            </a>
          </div>
          <div className="footer-right">
            <a href="#" onClick={handleLinkClick}>
              Quyền riêng tư
            </a>
            <a href="#" onClick={handleLinkClick}>
              Điều khoản cài đặt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
