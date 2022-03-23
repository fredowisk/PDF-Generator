import axios from 'axios';

const api = axios.create({
  baseURL: 'http://https://andrade-e-fonseca.herokuapp.com',
})

export default api;