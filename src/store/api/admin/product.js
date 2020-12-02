import axios from '../axios';

export const createProductRequest = async (product) => {
  return axios.post('/products', product, {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }
  });
};

export const updateProductRequest = async (pId, product) => {
  console.log(pId, product);
  return axios.put(`/products/${pId}`, product, {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }
  });
};

export const deleteProductRequest = async (pId) => {
  return axios.delete(`/products/destroy/${pId}`);
};