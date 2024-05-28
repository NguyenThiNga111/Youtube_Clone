// Import các thư viện và hàm cần thiết từ React và Redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideosSuccess,
  fetchVideosFailure,
  setLoading,
  setTotalVideos,
  setPageToken,
} from "./actions"; // Import các hành động từ file actions
import VideoThumbnail from "./VideoThumbnail"; // Import component hiển thị video thumbnail
import "../App.css"; // Import file CSS cho component

const VideoGrid = () => {
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để gửi các hành động
  const videos = useSelector((state) => state.videos); // Lấy trạng thái danh sách video từ store
  const loading = useSelector((state) => state.loading); // Lấy trạng thái tải từ store
  const error = useSelector((state) => state.error); // Lấy trạng thái lỗi từ store
  const totalVideos = useSelector((state) => state.totalVideos); // Lấy tổng số video từ store
  const pageToken = useSelector((state) => state.pageToken); // Lấy token của trang hiện tại từ store

  const API_KEY = "AIzaSyAhheSl2i66kwDIwQly0T2M9Ia3-GjqUfI"; // Khóa API của YouTube

  // Hàm lấy avatar của kênh từ API của YouTube
  const fetchChannelAvatar = async (channelId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet&id=${channelId}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        return data.items[0].snippet.thumbnails.default.url;
      }
    } catch (error) {
      console.error("Error fetching channel avatar:", error);
    }
    return null;
  };

  // Hàm lấy video từ API của YouTube
  const fetchVideos = async () => {
    dispatch(setLoading(true)); // Gửi hành động thay đổi trạng thái tải thành true
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=US&pageToken=${pageToken}&key=${API_KEY}`
      );
      const data = await response.json();
      const videosWithAvatars = await Promise.all(
        data.items.map(async (item) => {
          const avatarUrl = await fetchChannelAvatar(item.snippet.channelId);
          return {
            ...item,
            channelAvatar: avatarUrl,
            highThumbnail: item.snippet.thumbnails.high.url,
          };
        })
      );
      dispatch(setTotalVideos(data.pageInfo.totalResults)); // Gửi hành động cập nhật tổng số video
      dispatch(fetchVideosSuccess(videosWithAvatars)); // Gửi hành động lấy video thành công
      dispatch(setPageToken(data.nextPageToken)); // Gửi hành động cập nhật token của trang
    } catch (error) {
      console.error("Error fetching videos:", error);
      dispatch(fetchVideosFailure("Error fetching videos")); // Gửi hành động lấy video thất bại
    }
    dispatch(setLoading(false)); // Gửi hành động thay đổi trạng thái tải thành false
  };

  // Hàm xử lý sự kiện khi phần tử sentinel xuất hiện trong viewport
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && videos.length < totalVideos) {
      fetchVideos(); // Gọi hàm fetchVideos để tải thêm video
    }
  };

  // Sử dụng useEffect để gọi hàm fetchVideos khi component mount lần đầu tiên
  useEffect(() => {
    fetchVideos();
  }, [dispatch]);

  // Sử dụng useEffect để thiết lập IntersectionObserver khi videos.length hoặc totalVideos thay đổi
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const sentinel = document.getElementById("sentinel");

    if (sentinel) {
      observer.observe(sentinel); // Quan sát phần tử sentinel
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel); // Dừng quan sát phần tử sentinel khi component unmount
      }
    };
  }, [videos.length, totalVideos]);

  // Hiển thị loading nếu đang tải và chưa có video nào
  if (loading && videos.length === 0) {
    return <p>Loading videos...</p>;
  }

  // Hiển thị lỗi nếu có lỗi xảy ra
  if (error) {
    return <p>{error}</p>;
  }

  // Hiển thị danh sách video
  return (
    <div className="video-grid-wrapper">
      <div className="video-grid-container">
        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoThumbnail
              key={index}
              videoId={video.id.videoId || video.id}
              thumbnail={video.highThumbnail}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              views={video.statistics ? video.statistics.viewCount : "N/A"}
              publishedAt={video.snippet.publishedAt}
              time={video.contentDetails.duration}
              channelAvatar={video.channelAvatar}
            />
          ))}
        </div>
        <div id="sentinel" style={{ height: "10px" }}></div> {/* Phần tử sentinel để quan sát */}
      </div>
      {loading && videos.length > 0 && <div className="loading-spinner"></div>} {/* Hiển thị loading spinner nếu đang tải thêm video */}
    </div>
  );
};

export default VideoGrid;
