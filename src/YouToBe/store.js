// Import hàm configureStore từ @reduxjs/toolkit để tạo store Redux một cách dễ dàng
import { configureStore } from '@reduxjs/toolkit';

// Import reducer gốc đã được kết hợp từ các reducer khác
import rootReducer from './reducers';

// Tạo store Redux bằng cách sử dụng configureStore và truyền vào reducer gốc
const store = configureStore({
  reducer: rootReducer,
  // Có thể thêm các middleware và cấu hình khác ở đây nếu cần
});

// Xuất store để có thể sử dụng trong ứng dụng
export default store;
