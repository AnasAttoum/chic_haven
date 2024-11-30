"use client"

import CardProduct from "@/components/CardProduct";
import GetMoreProducts from "@/components/GetMoreProducts";
import { product } from "@/types/types";
import { useEffect, useState } from "react";

export default function Page() {

    const [products, setProducts] = useState<product[]>([])
    useEffect(()=>{
        (async () => {
            const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ offset: 0, limit: 20 }),
            });
            const data = await response.json();
            if (response.ok) setProducts(data)
        })();
    },[])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {products.map((product: product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </div>

      <GetMoreProducts setProducts={setProducts} />
    </>
  );
}