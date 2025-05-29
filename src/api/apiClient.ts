// lib/apiClient.ts
import axios from 'axios';
import { refreshToken } from './apiEndpoints'; // Adjust path as needed

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/',
  withCredentials: true,
});

// Maintain a queue of pending requests to retry after token refresh
let isRefreshing = false;
let failedRequestsQueue: Array<{ resolve: (value?: any) => void; reject: (error?: any) => void }> = [];

// Axios Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If there's no error response or already retried, reject
    if (!error.response || originalRequest._retry) {
      return Promise.reject(error);
    }

    // Only handle 401 Unauthorized
    if (error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          await refreshToken(); // Calls /auth/refresh and sets new access_token in cookie

          // Retry all queued requests
          failedRequestsQueue.forEach(({ resolve }) => resolve());
          failedRequestsQueue = [];
          return apiClient(originalRequest);
        } catch (refreshError) {
          // Clear queue and reject all
          failedRequestsQueue.forEach(({ reject }) => reject(refreshError));
          failedRequestsQueue = [];

          // 🔥 Redirect to login if refresh fails
          window.location.href = '/admission/portal/login';

          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        // Queue the request until token is refreshed
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        });
      }
    }

    // For other errors, just reject
    return Promise.reject(error);
  }
);