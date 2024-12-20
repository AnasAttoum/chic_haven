import { useInView } from "react-intersection-observer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { product } from "@/types/types";

export default function GetMoreProducts({
  setProducts,
  category,
  title,
}: {
  setProducts: Dispatch<SetStateAction<product[]>>;
  category: string;
  title: string;
}) {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [endProducts, setEndProducts] = useState(false);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);

      (async () => {
        const offset = 20 * page;
        const response = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            offset: offset,
            limit: 20,
            category: category,
            title: title,
          }),
        });
        const moreProducts = await response.json();
        if (!moreProducts.length) setEndProducts(true);
        if (response.ok)
          setProducts((prev) => {
            return [...prev, ...moreProducts];
          });
      })();

      // router.replace(`${pathname}?${params}`, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {!endProducts && (
        <div className="flex justify-center items-center my-16" ref={ref}>
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
