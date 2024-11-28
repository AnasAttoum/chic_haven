import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json";
        config.headers.Authorization = "Bearer ";
        return config;
    },
    (error) => {
        console.log("🚀 ~ error:", error)
    }
)

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      return { error: "Network error" };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { error: "Request setup error" };
    }
  }
);