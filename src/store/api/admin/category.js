import axios from '../axios';

export const createCategoryRequest = async (category) => {
  return axios.post('/category', category, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });
}

export const updateCategoryRequest = async (cId, category) => {
  return axios.put(`/category/${cId}`, category, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });
}

export const deleteCategoryRequest = async (cId) => {
  return axios.delete(`/category/destroy/${cId}`);
}