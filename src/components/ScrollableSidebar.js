import React, { useState, useEffect } from "react";
import Home from "../images/home.jpg"; // Icon mặc định
import HomeSelected from "../images/home_selected.jpg"; // Icon khi được chọn
import Shorts from "../images/shorts.jpg"; // Icon mặc định
import ShortsSelected from "../images/subchanel.jpg"; // Icon khi được chọn
import SubscriptionChannel from "../images/subchanel_selected.jpg"; // Icon mặc định
import SubscriptionChannelSelected from "../images/subchanel_selected.jpg"; // Icon khi được chọn
import Arrow from "../images/big.jpg";
import YourChanel from "../images/yourchanel.jpg";
import History from "../images/viewed.jpg";
import List from "../images/list.jpg";
import Video from "../images/yourvideo.jpg";
import Watch from "../images/afterview.jpg";
import WatchSelected from "../images/afterview_selected.jpg";
import Like from "../images/like.jpg";
import LikeSelected from "../images/like_selected.jpg";
import ListC from "../images/allchanel.jpg";
import Popular from "../images/popular.jpg";
import Music from "../images/music.jpg";
import Game from "../images/game.jpg";
import News from "../images/news.jpg";
import Cup from "../images/cup.jpg";
import YtPreminium from "../images/youtube_reminium.jpg";
import YtStudio from "../images/youtube_studio.jpg";
import YtMusic from "../images/youtube_music.jpg";
import YtKids from "../images/youtube_kids.jpg";
import Setting from "../images/setting.jpg";
import Report from "../images/report.jpg";
import Feedback from "../images/feedback.jpg";
import Support from "../images/support.jpg";
import "../Screens/styles/style_youtube/ScrollableSidebar.css"; // Import CSS file if needed

const ScrollableSidebar = ({ isMenuOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  const handleClick = (index) => {
    setSelectedIndex(index);
    if (index === 0) { // Nếu nhấp vào "Trang chủ"
      window.location.href = "/youtube"; // Tải lại trang YouTube
    }
    // Lưu selectedIndex vào localStorage
  localStorage.setItem('selectedIndex', index);
  };
  useEffect(() => {
    // Lấy selectedIndex từ localStorage
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
      setSelectedIndex(parseInt(storedIndex));
    }
  }, []);
  
  const items1 = [
    { icon: Home,
      selectedIcon: HomeSelected,
      text: "Trang chủ",
      onClick: () => window.location.reload()},
    { icon: Shorts, selectedIcon: ShortsSelected, text: "Shorts" },
    {
      icon: SubscriptionChannel,
      selectedIcon: SubscriptionChannelSelected,
      text: "Kênh Đăng Ký",
    },
  ];

  const items2 = [
    { icon: YourChanel, selectedIcon: YourChanel, text: "Kênh của bạn" },
    { icon: History, selectedIcon: History, text: "Video đã xem" },
    { icon: List, selectedIcon: List, text: "Danh sách phát" },
    { icon: Video, selectedIcon: Video, text: "Video của bạn" },
    { icon: Watch, selectedIcon: WatchSelected, text: "Xem sau" },
    { icon: Like, selectedIcon: LikeSelected, text: "Video đã Thích" },
  ];
  const items3 = [
    { icon: ListC, selectedIcon: ListC, text: "Tất cả kênh đăng ký" },
  ];

  const items4 = [
    { icon: Popular, selectedIcon: Popular, text: "Thịnh hành" },
    { icon: Music, selectedIcon: Music, text: "Âm nhạc" },
    { icon: Game, selectedIcon: Game, text: "Trò chơi" },
    { icon: News, selectedIcon: News, text: "Tin tức" },
    { icon: Cup, selectedIcon: Cup, text: "Thể thao" },
  ];

  const items5 = [
    { icon: YtPreminium, selectedIcon: YtPreminium, text: "Youtube Preminium" },
    { icon: YtStudio, selectedIcon: YtStudio, text: "Youtube Studio" },
    { icon: YtMusic, selectedIcon: YtMusic, text: "Youtube Music" },
    { icon: YtKids, selectedIcon: YtKids, text: "Youtube Kids" },
  ];

  const items6 = [
    { icon: Setting, selectedIcon: Setting, text: "Cài đặt" },
    { icon: Feedback, selectedIcon: Feedback, text: "Nhật ký báo cáo" },
    { icon: Report, selectedIcon: Report, text: "Trợ giúp" },
    { icon: Support, selectedIcon: Support, text: "Gửi ý kiến phản hồi" },
  ];
  const offset1 = items1.length;
  const offset2 = items2.length + offset1;
  const offset3 = items3.length + offset1 + offset2;
  const offset4 = items3.length + offset1 + offset2 + offset3;
  const offset5 = items3.length + offset1 + offset2 + offset3 + offset4;

  return (
    <div id="guide-inner-content" className="style-scope ytd-app">
      <div className="sidebar">
        <div className="scrollable-sidebar">
          {/* Nội dung thanh cuộn */}
          <ul className="list-group">
            {items1.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  selectedIndex === index ? "selected" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={selectedIndex === index ? item.selectedIcon : item.icon}
                  alt="icon"
                  className="home"
                />
                <span
                  className={`text ${
                    selectedIndex === index ? "selected-text" : ""
                  }`}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {!isMenuOpen && (
          <>
            <hr />
            <div className="scrollable-sidebar">
              {/* Nội dung thanh cuộn */}
              <ul className="list-group">
                <div className="list-group-item">
                  <p className="text-with-icon">
                    <span className="bold-text">Bạn</span>
                    <img src={Arrow} alt="arrow" className="home" />
                  </p>
                </div>
                {items2.map((item, index) => (
                  <li
                    key={offset1 + index}
                    className={`list-group-item ${
                      selectedIndex === offset1 + index ? "selected" : ""
                    }`}
                    onClick={() => handleClick(offset1 + index)}
                  >
                    <img
                      src={
                        selectedIndex === offset1 + index
                          ? item.selectedIcon
                          : item.icon
                      }
                      alt="icon"
                      className="home"
                    />
                    <span
                      className={`text ${
                        selectedIndex === offset1 + index ? "selected-text" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="scrollable-sidebar">
              {/* Nội dung thanh cuộn */}
              <ul className="list-group">
                <div className="list-group-item">
                  <p className="text-with-icon">
                    <span className="bold-text">Kênh đăng ký</span>
                  </p>
                </div>
                {items3.map((item, index) => (
                  <li
                    key={offset2 + index}
                    className={`list-group-item ${
                      selectedIndex === offset2 + index ? "selected" : ""
                    }`}
                    onClick={() => handleClick(offset2 + index)}
                  >
                    <img
                      src={
                        selectedIndex === offset2 + index
                          ? item.selectedIcon
                          : item.icon
                      }
                      alt="icon"
                      className="home"
                    />
                    <span
                      className={`text ${
                        selectedIndex === offset2 + index ? "selected-text" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="scrollable-sidebar">
              {/* Nội dung thanh cuộn */}
              <ul className="list-group">
                <div className="list-group-item">
                  <p className="text-with-icon">
                    <span className="bold-text">Khám Phá</span>
                  </p>
                </div>
                {items4.map((item, index) => (
                  <li
                    key={offset3 + index}
                    className={`list-group-item ${
                      selectedIndex === offset3 + index ? "selected" : ""
                    }`}
                    onClick={() => handleClick(offset3 + index)}
                  >
                    <img
                      src={
                        selectedIndex === offset3 + index
                          ? item.selectedIcon
                          : item.icon
                      }
                      alt="icon"
                      className="home"
                    />
                    <span
                      className={`text ${
                        selectedIndex === offset3 + index ? "selected-text" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="scrollable-sidebar">
              {/* Nội dung thanh cuộn */}
              <ul className="list-group">
                <div className="list-group-item">
                  <p className="text-with-icon">
                    <span className="bold-text">Dịch vụ khác của Youtube</span>
                  </p>
                </div>
                {items5.map((item, index) => (
                  <li
                    key={offset4 + index}
                    className={`list-group-item ${
                      selectedIndex === offset4 + index ? "selected" : ""
                    }`}
                    onClick={() => handleClick(offset4 + index)}
                  >
                    <img
                      src={
                        selectedIndex === offset4 + index
                          ? item.selectedIcon
                          : item.icon
                      }
                      alt="icon"
                      className="home"
                    />
                    <span
                      className={`text ${
                        selectedIndex === offset4 + index ? "selected-text" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="scrollable-sidebar">
              {/* Nội dung thanh cuộn */}
              <ul className="list-group">
                {items6.map((item, index) => (
                  <li
                    key={offset5 + index}
                    className={`list-group-item ${
                      selectedIndex === offset5 + index ? "selected" : ""
                    }`}
                    onClick={() => handleClick(offset5 + index)}
                  >
                    <img
                      src={
                        selectedIndex === offset5 + index
                          ? item.selectedIcon
                          : item.icon
                      }
                      alt="icon"
                      className="home"
                    />
                    <span
                      className={`text ${
                        selectedIndex === offset5 + index ? "selected-text" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <hr />
        <div className="text">
          <p>
            Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo
            Quảng cáo Nhà phát triển
          </p>
          <p>
            Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt
            động Thử các tính năng mới
          </p>
          <div className="bottom">
            <p>&copy; {currentYear} Google LLC</p>
          </div>
        </div>
      </div>

      {/* Các phần khác của giao diện của bạn */}
    </div>
  );
};

export default ScrollableSidebar;
