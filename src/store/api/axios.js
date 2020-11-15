import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-laravels.herokuapp.com/api'
});

export default instance;