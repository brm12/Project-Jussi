import axios from "axios";

const api = axios.create({
  baseURL: " https://world.openfoodfacts.org/api/v0/product/",
  timeout: 10000,
});

export default api;
