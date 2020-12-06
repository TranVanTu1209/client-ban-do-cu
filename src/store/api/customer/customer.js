import axios from '../axios';

export const getCustomerListRequest = async () => {
  return axios.get('/user');
}

export const deleteCustomerRequest = async (uId) => {
  return axios.delete(`/user/destroy/${uId}`);
}