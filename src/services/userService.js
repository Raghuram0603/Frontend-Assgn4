import api from './api';

export const fetchAllUsers = async () => {
  const res = await api.get('/users');
  return res.data.users;
};

export const fetchUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};
