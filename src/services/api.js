import axios from "axios";

const api = axios.create({
  baseURL: "https://6287e1747864d2883e8e66a0.mockapi.io",
});

export default api;
