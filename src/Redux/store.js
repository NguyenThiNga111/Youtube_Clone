import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Tải trạng thái của reducer searchHistory từ localStorage (nếu có)
const loadSearchHistory = () => {
  try {
    const serializedState = localStorage.getItem("searchHistory");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Lưu trạng thái của reducer searchHistory vào localStorage sau mỗi lần thay đổi
const saveSearchHistory = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("searchHistory", serializedState);
  } catch {
    // Ignore write errors
  }
};

const persistedSearchHistory = loadSearchHistory();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    // Sử dụng trạng thái của reducer searchHistory đã lưu từ localStorage
    searchHistory: persistedSearchHistory,
  },
});

// Subscribe để lưu trạng thái mới của reducer searchHistory vào localStorage sau mỗi lần thay đổi
store.subscribe(() => {
  saveSearchHistory(store.getState().searchHistory);
});

export default store;
