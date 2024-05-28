import React from "react";
import "../App.css";
import moment from "moment";

const VideoThumbnail = ({
  videoId,
  thumbnail,
  title,
  channel,
  views,
  publishedAt,
  channelAvatar,
}) => {
  const handleThumbnailClick = () => {
    // Điều hướng người dùng đến trang YouTube khi nhấp vào video
    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
  };

  const formatNumber = (number) => {
    if (typeof number === 'undefined') {
      return '';
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
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="video-thumbnail" onClick={handleThumbnailClick}>
        <img src={thumbnail} alt={title} className="thumbnail-image" />
        <div className="video-info">
          <img src={channelAvatar} alt={channel} className="avatar-image" />
          <div className="text-info">
            <h3>{title}</h3>
            <p>{channel}</p>
            <ul className="text-info-view-time">
              <p>
                {formatNumber(views)} Lượt xem &bull;
                {moment(publishedAt).fromNow()}
              </p>
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoThumbnail;