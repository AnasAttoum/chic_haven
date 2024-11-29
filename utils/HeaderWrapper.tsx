"use client"
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";


export default function HeaderWrapper() {
  return (
    <SessionProvider>
      <Header />
    </SessionProvider>
  );
}
