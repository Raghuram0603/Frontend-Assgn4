// import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.clear();
//       window.location.href = '/';
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://user-management-server-bpxj.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.message === 'Network Error') {
      alert('Network Error');
    }

    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default api;
