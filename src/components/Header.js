import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../Screens/Youtube/SearchBar";
import Menu from "../images/menu.jpg";
import LogoYt from "../images/logo_youtube.jpg";
import Mic from "../images/mic.jpg";
import Cam from "../images/cam.jpg";
import Bell from "../images/bell.jpg";
import User from "../images/avatar.jpg";
import "../Screens/styles/style_youtube/Header.css";
import { searchVideos } from '../Data/api';

const Header = ({ setError, setSearchResults, setLoading, toggleMenu }) => {
  return (
    <header className="header">
      <div className="header-left col-md-3">
        <div className="Menu" onClick={toggleMenu}>
          <img src={Menu} alt="menu" />
        </div>
        <div className="LogoYt">
          <img src={LogoYt} alt="YouTube Logo" />
        </div>
      </div>
      <div className="header-center col-md-6">
        <SearchBar onSearch={(query) => searchVideos(query, setLoading, setSearchResults, setError)} />
        <div className="search-mic">
          <img src={Mic} alt="mic" className="search-icon-mic" />
        </div>
      </div>
      <div className="header-right col-md-3">
        <div className="user-profile">
          <img src={Cam} alt="camera" className="cam" />
          <img src={Bell} alt="bell" className="bell" />
          <img src={User} alt="User Profile" className="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
