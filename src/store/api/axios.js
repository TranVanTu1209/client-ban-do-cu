import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://evening-citadel-90829.herokuapp.com/api'
});

export default instance;