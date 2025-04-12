import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // Update with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, add request interceptors for authentication, e.g., for JWT tokens
api.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
