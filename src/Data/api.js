const API_KEY = "AIzaSyBGzPyRK8z5_1S_f18G8XuX1xpvwFolhpY";
// Function to fetch channel avatar
export const fetchChannelAvatar = async (channelId) => {
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

// Function to fetch videos
export const fetchVideos = async (pageToken) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${API_KEY}`
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
    return {
      videos: videosWithAvatars,
      totalResults: data.pageInfo.totalResults,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

// Hàm để search video từ YouTube
export const searchVideos = async (
  query,
  setLoading,
  setSearchResults,
  setError
) => {
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
        const viewCount =
          viewCountData.items.length > 0
            ? viewCountData.items[0].statistics.viewCount
            : "N/A";
        return { videoId, viewCount };
      })
    );

    const videosWithAvatars = await Promise.all(
      data.items.map(async (item, index) => {
        const avatarUrl = await fetchChannelAvatar(item.snippet.channelId);
        return {
          ...item,
          channelAvatar: avatarUrl,
          viewCount: videosWithViews[index].viewCount,
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
