import { getTokenFromCookie } from './cookie';
import axios from 'axios';

const api = axios.create({
  // proxy 설정을 통해 통신을 하므로 baseURL 설정을 할 필요가 없게됩니다.
  // baseURL: import.meta.env.VITE_API_BASE_URL_CWY,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    // Authorization: '',
  },
});

const setHeaderAuthorization = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

api.interceptors.request.use((config) => {
  const token = getTokenFromCookie();
  token && setHeaderAuthorization(token);
  console.log(api.defaults);
  // console.log(token);
  return config;
});

export const apis = {
  // post
  postList: () => api.get('/api/posts'),
  postWrite: (content) => api.post('api/post', content),
  postRead: (postId) => api.get(`/api/posts/${postId}`),
  postEdit: () => {},
  postDelete: (postId) => api.delete(`/api/post/${postId}`),
  // like
  like: (postId) => api.put(`/api/posts/${postId}/like`),
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
  auth: (token) =>
    api.get('api/users/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
