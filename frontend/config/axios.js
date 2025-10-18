// src/lib/axios.js
import axios from "axios";

// Create a base Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URL, // replace with your backend base URL
    timeout: 10000, // 10 seconds timeout for safety
});

export default axiosInstance;
