
import request from '../request.js';

// 获取列表
const fetchTableData = (userId) => {
  return request.get(`/users/${userId}`);
};

export { fetchTableData };
