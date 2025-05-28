import api from './api';

export const login = async (username, password) => {
  const res = await api.post('/auth/login', { username, password });
  return res.data;
};

export const getLoggedInUser = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};
