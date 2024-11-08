import { product } from "@/types/types";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getProducts() {
  try {
    const response = await axiosInstance.get("products/?offset=0&limit=4");

    //remove the product if the image is not correct
    return response.data.filter((product: product) => {
      return product.images.join("").startsWith("https://i.imgur.com/");
    });
  } catch (error) {
    return error;
  }
}
