import axios from '../axios';

export const getProductListByVendorRequest = async () => {
  return axios.get('/products/list/vendor');
}