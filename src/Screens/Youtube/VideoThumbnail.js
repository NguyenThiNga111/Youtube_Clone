// VideoThumbnail.js
import React from "react";
import moment from "moment";
import { formatNumber } from "../../components/utils"; // Adjust the import path as needed
import "../styles/style_youtube/VideoThumbnail.css";

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
    // Navigate the user to the YouTube page when clicking on the video
    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
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
