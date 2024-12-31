import axios from 'axios';
import { useErrorBoundary } from 'react-error-boundary';

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    
    let errorMessage = 'An unexpected error occurred';
    if (response) {
      switch (response.status) {
        case 400:
          errorMessage = 'Bad request';
          break;
        case 401:
          errorMessage = 'Unauthorized';
          break;
        case 404:
          errorMessage = 'Resource not found';
          break;
        case 500:
          errorMessage = 'Server error';
          break;
        default:
          errorMessage = response.data?.message || errorMessage;
      }
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout';
    } else if (error.message === 'Network Error') {
      errorMessage = 'Network connection error';
    }

    error.message = errorMessage;
    return Promise.reject(error);
  }
);

// Retry mechanism
const MAX_RETRIES = 3;
const retryRequest = async (error) => {
  const { config, response } = error;
  
  if (!config || !response || response.status >= 500) {
    return Promise.reject(error);
  }

  config.__retryCount = config.__retryCount || 0;
  
  if (config.__retryCount >= MAX_RETRIES) {
    return Promise.reject(error);
  }

  config.__retryCount += 1;
  
  // Create new promise to handle exponential backoff
  const backoff = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000 * config.__retryCount);
  });

  await backoff;
  return api(config);
};

api.interceptors.response.use(null, retryRequest);

export default api;
