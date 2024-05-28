// Import hàm combineReducers từ Redux để kết hợp nhiều reducer lại thành một
import { combineReducers } from 'redux';

// Import các hằng số đại diện cho các loại hành động từ file actions
import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  SET_LOADING,
  SET_TOTAL_VIDEOS,
  SET_PAGE_TOKEN,
  SET_SEARCH_RESULTS,
  SET_ERROR,
  TOGGLE_MENU,
} from './actions';

const initialState = {
  searchResults: [],
  error: null,
  loading: false,
  isMenuOpen: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
// Reducer xử lý trạng thái danh sách video
const videosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      // Thêm các video mới vào danh sách hiện tại
      return [...state, ...action.payload.videos];
    default:
      // Trả về trạng thái hiện tại nếu hành động không được xử lý ở đây
      return state;
  }
};

// Reducer xử lý trạng thái tải (loading)
const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      // Cập nhật trạng thái tải theo payload của hành động
      return action.payload.loading;
    default:
      // Trả về trạng thái hiện tại nếu hành động không được xử lý ở đây
      return state;
  }
};

// Reducer xử lý trạng thái lỗi
const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_FAILURE:
      // Cập nhật lỗi theo payload của hành động
      return action.payload.error;
    default:
      // Trả về trạng thái hiện tại nếu hành động không được xử lý ở đây
      return state;
  }
};

// Reducer xử lý tổng số video
const totalVideosReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_TOTAL_VIDEOS:
      // Cập nhật tổng số video theo payload của hành động
      return action.payload.totalVideos;
    default:
      // Trả về trạng thái hiện tại nếu hành động không được xử lý ở đây
      return state;
  }
};

// Reducer xử lý token của trang (phân trang)
const pageTokenReducer = (state = '', action) => {
  switch (action.type) {
    case SET_PAGE_TOKEN:
      // Cập nhật token của trang theo payload của hành động
      return action.payload.pageToken;
    default:
      // Trả về trạng thái hiện tại nếu hành động không được xử lý ở đây
      return state;
  }
};

// Kết hợp tất cả các reducer lại thành một reducer duy nhất
const rootReducer = combineReducers({
  // Trạng thái danh sách video sẽ được quản lý bởi videosReducer
  videos: videosReducer,
  // Trạng thái tải sẽ được quản lý bởi loadingReducer
  loading: loadingReducer,
  // Trạng thái lỗi sẽ được quản lý bởi errorReducer
  error: errorReducer,
  // Tổng số video sẽ được quản lý bởi totalVideosReducer
  totalVideos: totalVideosReducer,
  // Token của trang sẽ được quản lý bởi pageTokenReducer
  pageToken: pageTokenReducer,
  header: headerReducer,
});

// Xuất reducer gốc để sử dụng trong store của Redux
export default rootReducer;
