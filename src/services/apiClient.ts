import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (attach token later)
apiClient.interceptors.request.use((config) => {
  // Example: attach JWT
  // const token = localStorage.getItem("access_token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor (handle errors globally)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 / refresh logic later
    return Promise.reject(error);
  }
);

export default apiClient;