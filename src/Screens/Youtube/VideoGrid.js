import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideosSuccess,
  fetchVideosFailure,
  setLoading,
  setTotalVideos,
  setPageToken,
} from "../../Redux/actions";
import VideoThumbnail from "./VideoThumbnail";
import "../styles/style_youtube/VideoGrid.css";
import { fetchVideos } from "../../Data/api";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const totalVideos = useSelector((state) => state.totalVideos);
  const pageToken = useSelector((state) => state.pageToken);

  const loadVideos = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const {
        videos: fetchedVideos,
        totalResults,
        nextPageToken,
      } = await fetchVideos(pageToken);
      dispatch(setTotalVideos(totalResults));
      dispatch(fetchVideosSuccess(fetchedVideos));
      dispatch(setPageToken(nextPageToken));
    } catch (error) {
      console.error("Error loading videos:", error);
      dispatch(fetchVideosFailure("Error loading videos"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, pageToken]);

// Trong component VideoGrid
const handleObserver = useCallback((entities) => {
  const target = entities[0];
  if (target.isIntersecting && videos.length < totalVideos && !loading) {
    loadVideos();
  }
}, [videos.length, totalVideos, loading, loadVideos]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const sentinel = document.getElementById("sentinel");

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  if (loading && videos.length === 0) {
    return <p>Loading videos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="video-grid-wrapper">
      <div className="video-grid-container">
        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoThumbnail
              key={index}
              videoId={video.id.videoId || video.id}
              thumbnail={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              views={video.statistics ? video.statistics.viewCount : "N/A"}
              publishedAt={video.snippet.publishedAt}
              time={video.contentDetails.duration}
              channelAvatar={video.channelAvatar}
            />
          ))}
        </div>
        <div id="sentinel" style={{ height: "10px" }}></div>
      </div>
      {loading && videos.length > 0 && <div className="loading-spinner"></div>}
    </div>
  );
};

export default VideoGrid;
