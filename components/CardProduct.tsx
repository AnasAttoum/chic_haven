import { product } from "@/types/types";
import Image from "next/image";

export default function CardProduct({product}:{product:product}) {
  return (
    <div className="flex flex-col items-center rounded-lg w-64 transition-all bg-[--secondary] p-1 gap-2 hover:bg-[--primary] hover:text-white">
      <Image
        src={product.images[0]}
        alt="product1"
        width={700}
        height={475}
        className="rounded-lg"
      />

      <div className="text-xs px-1">{product.title}</div>
      <div className="text-sm px-1">{product.price} $</div>
    </div>
  );
}
