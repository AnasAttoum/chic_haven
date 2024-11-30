import { axiosInstance } from "@/utils/axiosInstance";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const data = await request.json()
        const response = await axiosInstance.post("users",data);

        return NextResponse.json(response.data);
    }
    catch (error:any){
        return NextResponse.json({message:error.message}, {status:400})
    }
}