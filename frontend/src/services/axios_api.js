import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axios_api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
  },
});
