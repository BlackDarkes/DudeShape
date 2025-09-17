/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (value?: unknown) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const refreshToken = () => {
  return api.post("/auth/refresh");
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originRequest = error.config;

    if (error?.response.status === 401 && !originRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return api(originRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originRequest._retry = true;
      isRefreshing = false;

      return new Promise(async (resolve, reject) => {
        try {
          await refreshToken();
          processQueue(null);
          resolve(api(originRequest));
        } catch (err) {
          processQueue(err);
          reject(err);
        } finally {
          isRefreshing = false;
        }
      });
    }

    return Promise.reject(error);
  }
);

export { api };