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

export async function getProduct(id: string){
  try{
    const response = await axiosInstance.get(`products/${id}`)
    return response.data;
  }
  catch(error){
    return error;
  }
}


export async function getRelatedProducts(id:number, categoryId: number) {
  try {
    const response = await axiosInstance.get(`products/?offset=0&limit=5&categoryId=${categoryId}`);

    //remove the product if the image is not correct
    return response.data.filter((product: product) => {
      return product.images.join("").startsWith("https://i.imgur.com/") && product.id !== id;
    });
  } catch (error) {
    return error;
  }
}