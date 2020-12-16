import axios from '../axios';

export const updateOrderSuccessRequest = async () => {
  return axios.get('/order/update-success');
}