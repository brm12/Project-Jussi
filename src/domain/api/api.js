import axios from "axios";

const api = axios.create({
  baseURL: "http://api.tvmaze.com/search",
  timeout: 10000,
});

export default api;
