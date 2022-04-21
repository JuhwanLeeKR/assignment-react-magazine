import { getTokenFromCookie } from './cookie';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_CWY,
});

export const apis = {
  // post
  postList: () => api.get('/api/posts'),
  postWrite: (content) => api.post('api/post', content),
  postRead: (postId) => api.get(`/api/posts/${postId}`),
  postEdit: () => {},
  postDelete: (postId) => api.delete(`/api/post/${postId}`),
  // like
  like: (postId) => api.patch(`/api/posts/${postId}/like`),
  // comment
  commentList: (postId) => api.get(`/api/posts/${postId}/comments`),
  commentWrite: (postId, content) =>
    api.post(`/api/posts/${postId}/comments`, content),
  commentEdit: () => {},
  commentDelete: (postId, commentId) =>
    api.delete(`/api/posts/${postId}/comments/${commentId}`),
  // user
  signup: (userData) => api.post('/api/users/signup', userData),
  signin: (userData) => api.post('/api/users/signin', userData),
  auth: () => api.get('api/users/auth'),
};

// // api안에 넣어야하는지?
// headers: {
//   'content-type': 'application/json;charset=UTF-8',
//   Accept: 'application/json',
// },

// // 인스턴스를 만든 후 기본 값 변경하기
// const setHeaderAuthorization = (token) => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// const Axios = () => {
//   const token = getTokenFromCookie();
//   token && setHeaderAuthorization(token);
//   return axios;
// };

// // 인스턴스를 생성할때 config 기본값 설정하기
// const instance = axios.create({
//   baseURL: 'https://api.example.com'
// });

// // 인스턴스를 만든 후 기본값 변경하기
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
