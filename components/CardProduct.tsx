import { product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

export default function CardProduct({product}:{product:product}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col justify-between items-center rounded-lg w-36 sm:w-64 transition-all bg-[--secondary] p-1 gap-2 hover:bg-[--hover] hover:text-white"
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        width={700}
        height={475}
        className="rounded-lg"
      />

      <div className="text-[.5rem] sm:text-xs px-1">{product.title}</div>
      <div className="flex justify-between items-center w-full px-5">
        <div className="text-[.6rem] sm:text-sm px-1">{product.price} $</div>

        <AddToCartBtn product={product}/>
      </div>
    </Link>
  );
}
