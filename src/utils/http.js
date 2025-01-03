import axios from "axios";

// 创建axios实例
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    alert("bad input parameters");
  }
);

export default http;
