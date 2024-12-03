import { product } from "@/types/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { NextResponse } from "next/server";

export async function POST(request:Request){
   try {
     const data = await request.json();
     const response = await axiosInstance.get(`products/?offset=${data.offset}&limit=${data.limit}&categoryId=${data.category}&title=${data.title}`);

     const returnedData =  response.data.filter((product: product) => {
       return product.images.join("").startsWith("https://i.imgur.com/");
     });

     return NextResponse.json(returnedData);
   } catch (error: any) {
     return NextResponse.json({ message: error.message }, { status: 400 });
   }
}