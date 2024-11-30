import { authOptions } from "@/app/auth";
import axios from "axios";
import { getServerSession } from "next-auth";

export const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

axiosInstance.interceptors.request.use(
    async (config)=>{
      
        const session = await getServerSession(authOptions);
        let token = "";
        if (!!session) {
          token = session.user.access_token
        }
        
        config.headers["Content-Type"] = "application/json";
        config.headers.Authorization = `Bearer ${token}`;
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