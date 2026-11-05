import axios from "axios";

export const API = axios.create({
  baseURL: "https://tradevault-backend-9ehr.onrender.com",
  withCredentials: true,
});
