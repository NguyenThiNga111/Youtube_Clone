// VideoList.js
import React from "react";
import moment from "moment";
import { formatNumber } from "./utils"; // Assuming utils.js is in the same directory

const VideoList = ({ videos }) => {
  return (
    <div className="search-results">
      {videos.map((video, index) => (
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
  );
};

export default VideoList;
