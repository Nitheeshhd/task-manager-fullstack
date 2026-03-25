import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-fullstack.onrender.com/api",
});

export default API;