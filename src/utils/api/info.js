
import request from '../request.js';

// 获取用户信息
const fetchUserInfo = (userId) => {
  return request.get(`/users/${userId}`);
};


// 删除用户
const deleteUser = (userId) => {
  return request.delete(`/users/${userId}`);
};

export { fetchUserInfo, deleteUser };
