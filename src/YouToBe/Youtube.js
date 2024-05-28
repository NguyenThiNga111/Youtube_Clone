import React, { useState } from "react";
import Header from "../YouToBe/Header";
import Navbar from "../YouToBe/Navbar";
import VideoGrid from "../YouToBe/VideoGrid";
import ScrollableSidebar from "../YouToBe/ScrollableSidebar";
import VideoThumbnail from "../YouToBe/VideoThumbnail";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Youtube = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const formatNumber = (number) => {
    if (typeof number === "undefined") {
      return "";
    }
    if (number >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000) {
      return (number / 1_000).toFixed(1) + "K";
    }
    return number.toString();
  };

  return (
    <div className="outer-container">
      <div className="container-fluid">
        <Header
          setSearchResults={setSearchResults}
          setLoading={setLoading}
          setError={(error) => console.error(error)}
          toggleMenu={toggleMenu} // Thêm prop toggleMenu
        />
        <div className="row">
          <div className="col-md-2">
            <ScrollableSidebar />
          </div>
          <div className="col-md-10">
            <Navbar />
            <main>
              {loading ? (
                <div className="loading">Loading...</div>
              ) : searchResults.length > 0 ? (
                <div className="search-results">
                  {searchResults.map((video, index) => (
                    <div key={index} className="mb-4">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                            className="img-fluid"
                          />
                        </div>
                        <div className="info-left col-md-8">
                          <div className="video-info-search ml-3">
                            <h7>{video.snippet.title}</h7>
                            <p className="text-info-search">
                              {formatNumber(video.viewCount)} lượt xem &bull;
                              {moment(video.snippet.publishedAt).fromNow()}
                            </p>
                            <div className="video-info-search-img-name">
                              <img
                                src={video.channelAvatar}
                                alt={video.snippet.channelTitle}
                                className="avatar-image-search mr-2"
                              />
                              <p className="text-info-search">
                                {video.snippet.channelTitle}
                              </p>
                            </div>
                            <p className="text-info-search">
                              {video.snippet.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <VideoGrid />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
