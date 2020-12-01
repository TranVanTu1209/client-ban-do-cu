import axios from '../axios';

export const getProductListRequest = async () => {
  return axios.get('/products');
}

export const getSingleProductRequest = async (pId) => {
  return axios.get(`/products/${pId}`);
}