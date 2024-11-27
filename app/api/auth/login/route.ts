// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { axiosInstance } from "@/utils/axiosInstance";

export async function POST(req: Request) {
    try {
    const data = await req.json(); // Get the data from the request body
    const response = await axiosInstance.post("/auth/login", data);

    return NextResponse.json(response.data); // Return the response data to the client
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Login failed" },
      { status: 400 }
    );
  }
}
