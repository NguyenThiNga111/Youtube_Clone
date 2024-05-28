import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../YouToBe/SearchBar";
import Menu from "../images/9.jpg";
import LogoYt from "../images/8.jpg";
import Mic from "../images/12.jpg";
import Cam from "../images/10.jpg";
import Bell from "../images/11.jpg";
import User from "../images/1.jpg";

const Header = ({ setError, setSearchResults, setLoading, toggleMenu }) => {

  const API_KEY = "AIzaSyAhheSl2i66kwDIwQly0T2M9Ia3-GjqUfI";

  const fetchChannelAvatar = async (channelId) => {
    // Hàm để fetch dữ liệu avatar của kênh từ channelId
    // Sử dụng fetch để gửi request đến API của YouTube
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet&id=${channelId}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        return data.items[0].snippet.thumbnails.high.url;
      }
    } catch (error) {
      console.error("Error fetching channel avatar:", error);
    }
    return null;
  };

  const searchVideos = async (query) => {
    // Hàm để search video từ YouTube
    // Sử dụng fetch để gửi request đến API của YouTube
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=50&q=${query}`
      );
      const data = await response.json();
      const videoIds = data.items.map((item) => item.id.videoId);
      const videosWithViews = await Promise.all(
        videoIds.map(async (videoId) => {
          const viewCountResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=statistics&id=${videoId}`
          );
          const viewCountData = await viewCountResponse.json();
          const viewCount = viewCountData.items.length > 0 ? viewCountData.items[0].statistics.viewCount : "N/A";
          return { videoId, viewCount };
        })
      );

      const videosWithAvatars = await Promise.all(
        data.items.map(async (item, index) => {
          const avatarUrl = await fetchChannelAvatar(item.snippet.channelId);
          return {
            ...item,
            channelAvatar: avatarUrl,
            viewCount: videosWithViews[index].viewCount
          };
        })
      );

      setSearchResults(videosWithAvatars);
      setLoading(false);
    } catch (error) {
      console.error("Error searching videos:", error);
      setError("Error searching videos");
      setLoading(false);
    }
  };

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
        <SearchBar onSearch={searchVideos} />
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
