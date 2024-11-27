"use client"
import { SessionProvider } from "next-auth/react";
import AA from "../components/Header";


export default function HeaderWrapper() {
  return (
    <SessionProvider>
      <AA />
    </SessionProvider>
  );
}
