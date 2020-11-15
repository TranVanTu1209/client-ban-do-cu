import axios from '../axios';

export const register = async (data) => {
  return axios.post('/auth/register', data, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}

export const login = async (data) => {
  return axios.post('/auth/login', data, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}