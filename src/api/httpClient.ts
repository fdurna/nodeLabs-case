import axios from 'axios';

export const API_BASE_URL = 'https://case.nodelabs.dev/api';

export const http = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Token refresh fonksiyonu
const refreshAccessToken = async () => {
  try {
    const oldToken = localStorage.getItem('token');
    if (!oldToken) return null;

    const response = await axios.post(`${API_BASE_URL}/users/refresh-token`, {
      accessToken: oldToken,
    });

    const newToken = response.data.accessToken;
    localStorage.setItem('token', newToken);
    return newToken;
  } catch (error) {
    console.error('Token yenilenemedi', error);
    return null;
  }
};

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return http(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
