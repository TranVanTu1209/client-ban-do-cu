import axios from '../axios';

export const getCustomerList = async () => {
  return axios.get('/user');
}

export const deleteCustomer = async (uId) => {
  return axios.delete(`/user/destroy/uId`);
}