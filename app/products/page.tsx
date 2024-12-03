"use client";

import CardProduct from "@/components/CardProduct";
import GetMoreProducts from "@/components/GetMoreProducts";
import { product } from "@/types/types";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";
import FilterProducts from "@/components/FilterProducts";

export default function Page() {
  const [products, setProducts] = useState<product[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offset: 0,
          limit: 20,
          category: category,
          title: title,
        }),
      });
      const data = await response.json();
      if (response.ok) setProducts(data);
      setLoading(false);
    })();
  }, [category, title]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterProducts setTitle={setTitle} />
          {!products.length ? (
            <div className="flex flex-col justify-center items-center smallPage">
              <div className="text-[--hover]">No Product Found</div>
              <iframe src="/empty.svg" className="w-[50vw] h-[50vh]" />
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-5 p-5">
                {products.map((product: product) => {
                  return <CardProduct key={product.id} product={product} />;
                })}
              </div>

              <GetMoreProducts
                setProducts={setProducts}
                category={category}
                title={title}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
