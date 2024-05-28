import React from "react";
import "../App.css";
import logo from "../images/3.jpg";
import Is from "../images/4.jpg";
import Iss from "../images/5.jpg";
import Isss from "../images/6.jpg";
import Issss from "../images/7.jpg";
import NavigationButton from "../components/NavigationButton";
function handleLinkClick() {
  console.log("Đã click vào liên kết");
}

function handleButtonClick() {
  console.log("Đã click vào nút");
}

function App() {
  return (
    <div className="App">
     <NavigationButton/>
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
            <button className="nav-link-button" onClick={handleButtonClick}>
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
            <input type="search" id="search" />
          </div>
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
        <div className=""footer-top>
          <p>Việt Nam</p><hr width="100%"/>
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
