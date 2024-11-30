import { axiosInstance } from "@/utils/axiosInstance";

export async function getUser() {
  try {
    const response = await axiosInstance.get("auth/profile");

    return response.data
  } catch (error) {
    return error;
  }
}
