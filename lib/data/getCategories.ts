import { category } from "@/types/types";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getCategories() {
  try {
    const response = await axiosInstance.get("categories");

    return response.data.filter((category: category) => {
      return category.image.startsWith("https://i.imgur.com/");
    });
  } catch (error) {
    return error;
  }
}
