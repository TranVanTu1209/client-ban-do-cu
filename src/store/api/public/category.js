import axios from '../axios';

export const getListCategoryRequest = async () => {
  return axios.get('/category');
}

export const getSingleCategoryRequest = async (cId) => {
  return axios.get(`/category/${cId}`);
}
