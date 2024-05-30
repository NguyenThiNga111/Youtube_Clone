
// actions/headerActions.js
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_ERROR = "SET_ERROR";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const UPDATE_SEARCH_HISTORY ="UPDATE_SEARCH_HISTORY";
export const ADD_TO_SEARCH_HISTORY = 'ADD_TO_SEARCH_HISTORY';
export const CLEAR_SEARCH_HISTORY = 'CLEAR_SEARCH_HISTORY';
// Khai báo các hằng số đại diện cho các loại hành động khác nhau
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_FAILURE = "FETCH_VIDEOS_FAILURE";
export const SET_LOADING = "SET_LOADING";
export const INCREASE_VIDEOS_TO_SHOW = "INCREASE_VIDEOS_TO_SHOW";
export const SET_TOTAL_VIDEOS = "SET_TOTAL_VIDEOS";
export const SET_PAGE_TOKEN = "SET_PAGE_TOKEN";

export const setSearchResults = (results) => ({
  
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
// Tạo action cho việc lấy video thành công
export const fetchVideosSuccess = (videos) => ({
  // Loại hành động
  type: FETCH_VIDEOS_SUCCESS,
  // Dữ liệu kèm theo hành động
  payload: { videos },
});

// Tạo action cho việc lấy video thất bại
export const fetchVideosFailure = (error) => ({
  // Loại hành động
  type: FETCH_VIDEOS_FAILURE,
  // Dữ liệu kèm theo hành động (thông tin lỗi)
  payload: { error },
});

// Tạo action để thay đổi trạng thái tải (loading)
export const setLoading = (loading) => ({
  // Loại hành động
  type: SET_LOADING,
  // Dữ liệu kèm theo hành động (trạng thái tải)
  payload: { loading },
});

// Tạo action để tăng số lượng video được hiển thị
export const increaseVideosToShow = () => ({
  // Loại hành động
  type: INCREASE_VIDEOS_TO_SHOW,
  // Không có dữ liệu kèm theo hành động này
});

// Tạo action để thiết lập tổng số video
export const setTotalVideos = (totalVideos) => ({
  // Loại hành động
  type: SET_TOTAL_VIDEOS,
  // Dữ liệu kèm theo hành động (tổng số video)
  payload: { totalVideos },
});

// Tạo action để thiết lập token của trang (phân trang)
export const setPageToken = (pageToken) => ({
  // Loại hành động
  type: SET_PAGE_TOKEN,
  // Dữ liệu kèm theo hành động (token của trang)
  payload: { pageToken },
});

export const addToSearchHistory = (query) => ({
  type: ADD_TO_SEARCH_HISTORY,
  payload: query,
});

export const clearSearchHistory = () => ({
  type: CLEAR_SEARCH_HISTORY,
});

export const updateSearchHistory = (searchHistory) => ({
  type: UPDATE_SEARCH_HISTORY,
  payload: searchHistory,
});