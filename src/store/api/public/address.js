import axios from 'axios';

export const getListProvinceRequest = async () => {
  return axios.get('https://vapi.vnappmob.com/api/province');
}