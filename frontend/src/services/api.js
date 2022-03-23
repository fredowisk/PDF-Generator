import axios from "axios";

const api = axios.create({
  baseURL: "https://andrade-e-fonseca.herokuapp.com/",
});

export default api;
