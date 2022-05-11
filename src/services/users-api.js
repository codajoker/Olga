import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'Authorization';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = user => {
  return axios.post('/users/signup', user).then(({ data }) => data);
};

export const loginUser = user => {
  return axios.post('users/login', user).then(({ data }) => data);
};

export const logoutUser = () => {
  return axios.post('users/logout').then(({ data }) => data);
};

export const currentUser = () => {
  return axios.get('users/current').then(({ data }) => data);
};

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
