import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mocki.io/v1",
  timeout: 10000,
});

export default api;
