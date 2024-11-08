import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { comfortaa } from "./ui/fonts";


export const metadata: Metadata = {
  authors: { name: "Anas Attoum" },
  title: "Chic Haven",
  description:
    "Chic Haven - Elegant Furniture for Modern Living - Discover Chic Haven, your premier destination for stylish and sophisticated furniture that transforms your home into a haven of elegance. Our curated collection features contemporary and chic designs, crafted to blend seamlessly with any decor style. From stunning sofas to exquisite dining sets, each piece is handpicked for quality and design. Elevate your living space with our exclusive range of high-end furniture that reflects your unique taste and lifestyle. Shop now and experience unmatched beauty and comfort at Chic Haven!",
  keywords:
    "Chic Furniture, Modern Furniture, Stylish Home Decor, Contemporary Furniture Online, Chic Home Furniture, Elegant Furniture Designs, Designer Furniture, Affordable Chic Furniture, Chic, Haven",
  icons: "/chic_haven.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
