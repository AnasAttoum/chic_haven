import { product } from "@/types/types";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getProducts({offset, limit}:{offset?:number, limit?:number}={offset:0, limit:4}) {
  try {
    const response = await axiosInstance.get(`products/?offset=${offset}&limit=${limit}`);

    //remove the product if the image is not correct
    return response.data.filter((product: product) => {
      return product.images.join("").startsWith("https://i.imgur.com/");
    });
  } catch (error) {
    return error;
  }
}
