"use client"

import CardProduct from "@/components/CardProduct";
import GetMoreProducts from "@/components/GetMoreProducts";
import { product } from "@/types/types";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";

export default function Page() {

    const [products, setProducts] = useState<product[]>([])
    const searchParams = useSearchParams()
    const category = searchParams.get('category') || ""

    useEffect(()=>{
        (async () => {
            const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ offset: 0, limit: 20, category: category }),
            });
            const data = await response.json();
            if (response.ok) setProducts(data)
        })();
    },[category])

  return (
    <>
      {!products.length ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-5 p-5">
            {products.map((product: product) => {
              return <CardProduct key={product.id} product={product} />;
            })}
          </div>

          <GetMoreProducts setProducts={setProducts} category={category} />
        </>
      )}
    </>
  );
}