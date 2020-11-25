import axios from '../axios';

export const registerRequest = async (data) => {
  return axios.post('/auth/register', data, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}

export const loginRequest = async (data) => {
  return axios.post('/auth/login', data, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}